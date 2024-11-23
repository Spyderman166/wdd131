const wind = 5;
const temperature = 45;

if (wind >= 3 && temperature >= 45) {
    document.getElementById("windChill").textContent = calculateWindChill(temperature, wind) + " °F";
}

function calculateWindChill(temp, windSpeed) {
    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));

    return windChill.toFixed();
}