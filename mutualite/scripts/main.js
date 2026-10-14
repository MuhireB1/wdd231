import { displayDialog, setupFooter, setupNavigation, displayFormInfo} from "./utility.mjs";
import { fetchCurrentWeather, fetchRedditPosts } from "./api.mjs";

setupNavigation();
setupFooter();
displayDialog();
displayFormInfo();

const commentCards = document.querySelector("#comment-cards");
const commentsStatus = document.querySelector("#comments-status");

if (commentCards && commentsStatus) {
    loadCommunityPosts();
}

async function loadCommunityPosts() {
    const { posts, isSample } = await fetchRedditPosts();
    commentsStatus.textContent = isSample
        ? "Live posts are unavailable right now. These sample community reflections illustrate the kind of stories we celebrate."
        : "Public Reddit posts about giving, community support, and charitable work.";

    const cards = posts.map(post => {
        const article = document.createElement("article");
        article.className = "comment-card";

        const source = document.createElement(post.url ? "a" : "span");
        source.className = "comment-source";
        source.textContent = post.source;
        if (post.url) {
            source.href = post.url;
            source.target = "_blank";
            source.rel = "noopener noreferrer";
        }

        const title = document.createElement("h3");
        title.textContent = post.title;

        const text = document.createElement("p");
        text.textContent = post.text;

        const author = document.createElement("p");
        author.className = "comment-author";
        author.textContent = `Shared by ${post.author}`;

        article.append(source, title, text, author);
        return article;
    });

    commentCards.replaceChildren(...cards);
}

const spotlightCards = document.querySelector("#spotlight-cards");
const spotlightStatus = document.querySelector("#spotlight-status");

if (spotlightCards && spotlightStatus) {
    loadSpotlightPrograms();
}

const weatherContainer = document.querySelector("#weather");

if (weatherContainer) {
    loadRwandaWeather();
}

const programSelect = document.querySelector("#program");
const programPreferenceStatus = document.querySelector("#program-preference-status");
const programPreferenceKey = "mutualite-preferred-program";

if (programSelect && programPreferenceStatus) {
    restoreProgramPreference();
    programSelect.addEventListener("change", saveProgramPreference);
}

function restoreProgramPreference() {
    try {
        const preferredProgram = localStorage.getItem(programPreferenceKey);
        if ([...programSelect.options].some(option => option.value === preferredProgram)) {
            programSelect.value = preferredProgram;
            programPreferenceStatus.textContent = "Your previous program choice has been restored from this device.";
        }
    } catch (error) {
        console.error("Unable to restore the saved program preference:", error);
        programPreferenceStatus.textContent = "Your browser does not allow saving preferences on this device.";
    }
}

function saveProgramPreference() {
    try {
        localStorage.setItem(programPreferenceKey, programSelect.value);
        programPreferenceStatus.textContent = "Your preferred program is saved on this device.";
    } catch (error) {
        console.error("Unable to save the program preference:", error);
        programPreferenceStatus.textContent = "Your browser does not allow saving preferences on this device.";
    }
}

async function loadRwandaWeather() {
    const status = document.querySelector("#weather-status");

    try {
        const current = await fetchCurrentWeather();
        const temperature = Math.round((current.main.temp - 32) * 5 / 9);
        const feelsLike = Math.round((current.main.feels_like - 32) * 5 / 9);
        const description = current.weather[0].description;
        const card = document.createElement("article");
        card.className = "weather-card";

        const image = document.createElement("img");
        image.src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
        image.alt = description;
        image.width = 80;
        image.height = 80;

        const details = document.createElement("div");
        details.className = "weather-details";

        const location = document.createElement("p");
        location.className = "weather-location";
        location.textContent = `${current.name || "Kigali"}, Rwanda`;

        const reading = document.createElement("p");
        reading.className = "weather-reading";
        reading.textContent = `${temperature}°C`;

        const condition = document.createElement("p");
        condition.className = "weather-condition";
        condition.textContent = description;

        const summary = document.createElement("p");
        summary.textContent = `Feels like ${feelsLike}°C · Humidity ${current.main.humidity}%`;

        details.append(location, reading, condition, summary);
        card.append(image, details);
        weatherContainer.replaceChildren(card);
        status.textContent = "Current conditions in Kigali, Rwanda.";
    } catch (error) {
        console.error("Unable to load Rwanda weather:", error);
        status.textContent = "Rwanda weather is temporarily unavailable.";
    }
}

async function loadSpotlightPrograms() {
    try {
        const response = await fetch("./data/programs.json");
        if (!response.ok) {
            throw new Error(`Unable to load programs: HTTP ${response.status}`);
        }

        const programs = await response.json();
        if (!Array.isArray(programs)) {
            throw new Error("The programs data must be a list");
        }

        const topPrograms = programs
            .filter(program => Number.isFinite(program.annual_beneficiaries))
            .sort((first, second) => second.annual_beneficiaries - first.annual_beneficiaries)
            .slice(0, 3);

        if (!topPrograms.length) {
            throw new Error("No programs with annual beneficiary totals were found");
        }

        const cards = topPrograms.map(program => {
            const article = document.createElement("article");
            const picture = document.createElement("picture");
            const mobileImage = document.createElement("source");
            const image = document.createElement("img");
            const title = document.createElement("h3");
            const description = document.createElement("p");
            const reach = document.createElement("p");
            const link = document.createElement("a");

            article.className = "program-card";
            picture.className = "program-image";
            mobileImage.media = "(max-width: 600px)";
            mobileImage.srcset = "./images/small.webp";
            image.src = "./images/medium.webp";
            image.srcset = "./images/medium.webp 800w, ./images/large.webp 1600w";
            image.sizes = "(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw";
            image.alt = `Community support through ${program.program_name}`;
            image.width = 1600;
            image.height = 900;
            image.loading = "lazy";
            title.textContent = program.program_name;
            description.textContent = program.description;
            reach.className = "program-reach";
            reach.textContent = `${program.annual_beneficiaries.toLocaleString()} people supported annually`;
            link.className = "program-link";
            link.href = "./about.html#programs";
            link.textContent = "Explore all programs";

            picture.append(mobileImage, image);
            article.append(picture, title, description, reach, link);
            return article;
        });

        spotlightCards.replaceChildren(...cards);
        spotlightStatus.textContent = "";
    } catch (error) {
        console.error("Unable to display spotlight programs:", error);
        spotlightStatus.textContent = "Program information is temporarily unavailable. Please visit About to learn more.";
    }
}
