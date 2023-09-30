document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const temperatureInput = document.getElementById("temperatureInput");
    const fromScale = document.getElementById("fromScale");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const inputTemperature = parseFloat(temperatureInput.value);
        const fromUnit = fromScale.value;
        let convertedTemperature;

        if (fromUnit === "celsius") {
            convertedTemperature = inputTemperature * 9/5 + 32;
        } else if (fromUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature - 32) * 5/9;
        } else if (fromUnit === "kelvin") {
            convertedTemperature = inputTemperature - 273.15;
        }

        result.textContent = convertedTemperature.toFixed(2);
    });
});
