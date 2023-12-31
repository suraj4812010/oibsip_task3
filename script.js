function convertTemperature(temperature, unit) {
    if (unit === "c") {
      return temperature * 9 / 5 + 32;
    } else {
      return (temperature - 32) * 5 / 9;
    }
  }

function printUnit(unit) {
    if (unit === "c") {
      return "Farhenheit";
    } else {
      return "Celcius";
    }
  }
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var temperature = parseFloat(document.querySelector("input[name=temperature]").value);
    var unit = document.querySelector("select[name=unit]").value;
  
    var output = document.querySelector("#output");
    output.innerHTML = convertTemperature(temperature, unit);

    var output = document.querySelector("#outputUnit");
    output.innerHTML = printUnit(unit);
  });