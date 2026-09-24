// =========================================
// USER INTERFACE FUNCTIONS
// =========================================


// ---------- DIRECTORY MEMBERS ----------

export function displayMembers(data) {

    const directoryContainer =
        document.querySelector("#directory-container");

    directoryContainer.innerHTML = "";

    data.forEach(member => {

        const card = document.createElement("article");

        card.classList.add("member-card");

        card.innerHTML = `
            <img 
                src="${member.image}" 
                alt="${member.name} logo"
                loading="lazy"
            >

            <div class="member-information">

                <h2>${member.name}</h2>

                <p class="category">
                    ${member.category}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${member.address}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${member.phone}
                </p>

                <p class="description">
                    ${member.description}
                </p>

                <span class="membership">
                    ${member.membership}
                </span>

                <br>

                <a 
                    href="${member.website}" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit ${member.name} website"
                >
                    Visit Website
                </a>

            </div>
        `;

        directoryContainer.appendChild(card);
    });
}


// ---------- BUSINESS SPOTLIGHTS ----------

export function displaySpotlights(members) {

    const spotlights =
        document.querySelector("#spotlights");

    spotlights.innerHTML = `
        <h2>Business Spotlights</h2>

        <div class="spotlight-container">

            ${members.map(member => `

                <article class="spotlight-card">

                    <img
                        src="${member.image}"
                        alt="${member.name} logo"
                        loading="lazy"
                    >

                    <h3>${member.name}</h3>

                    <p>
                        <strong>Membership:</strong>
                        ${member.membership}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        <a href="tel:${member.phone}">
                            ${member.phone}
                        </a>
                    </p>

                    <p>
                        <strong>Address:</strong>
                        ${member.address}
                    </p>

                    <p>
                        <strong>Website:</strong>
                        <a
                            href="${member.website}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                        </a>
                    </p>

                </article>

            `).join("")}

        </div>
    `;
}


// ---------- WEATHER ----------

export function displayWeather(current, forecast) {

    const weather =
        document.querySelector("#weather");

    weather.innerHTML = `
        <h2>Current Weather</h2>

        <div class="weather-current">

            <img
                src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png"
                alt="${current.weather[0].description}"
            >

            <div>

                <p class="temperature">
                    ${Math.round(current.main.temp)}°F
                </p>

                <p>
                    ${current.weather[0].description}
                </p>

            </div>

        </div>

        <div class="forecast">

            <h3>3-Day Forecast</h3>

            <div class="forecast-cards">

                ${forecast.map(day => `

                    <article class="forecast-card">

                        <h4>
                            ${formatDate(day.dt_txt)}
                        </h4>

                        <img
                            src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png"
                            alt="${day.weather[0].description}"
                        >

                        <p>
                            ${Math.round(day.main.temp)}°F
                        </p>

                        <p>
                            ${day.weather[0].description}
                        </p>

                    </article>

                `).join("")}

            </div>

        </div>
    `;
}


// ---------- FORMAT FORECAST DATE ----------

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
}