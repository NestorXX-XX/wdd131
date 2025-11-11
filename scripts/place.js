const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
const windChillEl = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillEl.textContent = "N/A";
}