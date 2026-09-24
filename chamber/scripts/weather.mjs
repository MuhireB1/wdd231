// =========================================
// WEATHER
// =========================================

import {
    fetchCurrentWeather,
    fetchForecast
} from "./api.mjs";

import { displayWeather } from "./ui.mjs";


// ---------- LOAD WEATHER ----------

export async function loadWeather() {

    const weather =
        document.querySelector("#weather");

    try {

        const current =
            await fetchCurrentWeather();

        const forecast =
            await fetchForecast();


        const threeDays =
            getThreeDayForecast(forecast);


        displayWeather(
            current,
            threeDays
        );

    } catch (error) {

        console.error(
            "Weather error:",
            error
        );

        weather.innerHTML = `
            <h2>Current Weather</h2>

            <p>
                Weather information is currently unavailable.
            </p>
        `;
    }
}


// ---------- GET THREE DAYS ----------

function getThreeDayForecast(data) {

    const daily = {};


    data.list.forEach(item => {

        const date =
            item.dt_txt.split(" ")[0];


        if (!daily[date]) {

            daily[date] = item;

        }

    });


    return Object.values(daily).slice(1, 4);
}