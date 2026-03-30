async function predictDisease() {
    const inputs = [
        document.getElementById("pregnancies").value,
        document.getElementById("glucose").value,
        document.getElementById("bloodPressure").value,
        document.getElementById("skinThickness").value,
        document.getElementById("insulin").value,
        document.getElementById("bmi").value,
        document.getElementById("dpf").value,
        document.getElementById("age").value
    ];

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            features: inputs.map(Number)
        })
    });

    const result = await response.json();

    document.getElementById("result").innerText =
        result.prediction === 1 ? "High Diabetes Risk" : "Low Diabetes Risk";
}
