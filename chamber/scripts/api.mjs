// =========================================
// API FUNCTIONS
// =========================================

// ---------- MEMBER DATA ----------

export async function fetchMembers() {
    const response = await fetch("data/member.json");

    if (!response.ok) {
        throw new Error(`Member data error: ${response.status}`);
    }

    return await response.json();
}


// ---------- WEATHER API ----------

const currentWeatherURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=-1.95&lon=30.10&units=imperial&appid=02f77436353831ce767f52406206d298`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=-1.95&lon=30.10&units=imperial&appid=02f77436353831ce767f52406206d298`;


// ---------- CURRENT WEATHER ----------

export async function fetchCurrentWeather() {

    const response = await fetch(currentWeatherURL);

    if (!response.ok) {
        throw new Error(`Weather error: ${response.status}`);
    }

    return await response.json();
}


// ---------- WEATHER FORECAST ----------

export async function fetchForecast() {

    const response = await fetch(forecastURL);

    if (!response.ok) {
        throw new Error(`Forecast error: ${response.status}`);
    }

    return await response.json();
}