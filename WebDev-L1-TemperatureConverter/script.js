// HTML se elements pakarna
var temperature = document.getElementById("temperature");
var fromUnit = document.getElementById("fromUnit");
var convertBtn = document.getElementById("convertBtn");
var result = document.getElementById("result");

// Convert button dabane par
convertBtn.addEventListener("click", function () {

    // Input ki value lena (number mein badal kar)
    var temp = parseFloat(temperature.value);
    var from = fromUnit.value;

    // Agar input khali ho ya number na ho
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number!";
        return;
    }

    // Absolute zero se neeche ki temperature
    if (from === "Celsius" && temp < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero (-273.15 °C)!";
        return;
    }
    if (from === "Fahrenheit" && temp < -459.67) {
        result.textContent = "Temperature cannot be below absolute zero (-459.67 °F)!";
        return;
    }
    if (from === "Kelvin" && temp < 0) {
        result.textContent = "Temperature cannot be below absolute zero (0 K)!";
        return;
    }

     // Teeno values ke naam
    var celsius, fahrenheit, kelvin;

    // Jis unit mein user ne likha, uske hisaab se baqi nikalna
    if (from === "Celsius") {
        celsius = temp;
        fahrenheit = temp * 9 / 5 + 32;
        kelvin = temp + 273.15;
    } else if (from === "Fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5 / 9 + 273.15;
    } else {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9 / 5 + 32;
        kelvin = temp;
    }

    // Result dikhana
    result.innerHTML =
        "Celsius: " + celsius.toFixed(2) + " °C<br>" +
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
        "Kelvin: " + kelvin.toFixed(2) + " K";
});