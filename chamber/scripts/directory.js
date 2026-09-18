/* =========================================
   CHAMBER DIRECTORY JAVASCRIPT
   ========================================= */

// ---------- BUSINESS DATA ----------

const directoryData = document.querySelector("#directory-container");
async function getDirectoryData() {
    try {
        const response = await fetch("data/member.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching directory data:", error);
        directoryData.innerHTML = "<p>Sorry, we are unable to load the directory at this time. Please try again later.</p>";

    }
}


// ---------- DIRECTORY CONTAINER ----------

const directoryContainer =
    document.querySelector("#directory-container");


// ---------- DISPLAY MEMBERS ----------

function displayMembers(data) {

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

// ---------- GRID VIEW ----------

const gridButton = document.querySelector("#grid-view");

gridButton.addEventListener("click", () => {

    directoryContainer.classList.remove("list-view");
    directoryContainer.classList.add("grid-view");

    gridButton.setAttribute("aria-pressed", "true");
    listButton.setAttribute("aria-pressed", "false");
});


// ---------- LIST VIEW ----------

const listButton = document.querySelector("#list-view");

listButton.addEventListener("click", () => {

    directoryContainer.classList.remove("grid-view");
    directoryContainer.classList.add("list-view");

    listButton.setAttribute("aria-pressed", "true");
    gridButton.setAttribute("aria-pressed", "false");
});


// ---------- HAMBURGER MENU ----------

const navButton = document.querySelector("#nav-button");
const navList = document.querySelector("nav ul");

navButton.setAttribute("aria-expanded", "false");

navButton.addEventListener("click", () => {

    const isOpen = navList.classList.toggle("show");

    navButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    navButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});


// ---------- WAYFINDING ----------

const currentPage =
    window.location.pathname.split("/").pop() || "directory.html";

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.parentElement.classList.add("active");

        link.setAttribute(
            "aria-current",
            "page"
        );
    }
});


// ---------- LAST MODIFIED ----------

const lastModified =
    document.querySelector("#last-modified");

if (lastModified) {

    lastModified.textContent =
        document.lastModified;
}

// Display the current copyright year
const copyrightYear = document.querySelector("#copyright-year");
copyrightYear.textContent = new Date().getFullYear();



// ---------- INITIAL DIRECTORY ----------

getDirectoryData();