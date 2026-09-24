const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCap = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=223444e9d0408208854c773748283299";


// Write an async and wait function to fetch the API info
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        displayResults(data);
    }
    catch(error) {
        console.error(`Error Fetching: ${error}`);
    }
};

// Dynamically modify and populate information into HTML
function displayResults(data) {
    currentTemp.textContent = `${data.main.temp} °F`;
    weatherIcon.setAttribute(
    'src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute(
    'alt', data.weather[0].description
    );
    figCap.textContent = data.weather[0].description;
}

// call apiFech function
apiFetch();
