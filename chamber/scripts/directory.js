/* =========================================
   CHAMBER DIRECTORY JAVASCRIPT
   ========================================= */

// ---------- BUSINESS DATA ----------

const members = [
    {
        name: "Kigali Business Center",
        category: "Business Services",
        address: "KN 5 Road, Kigali, Rwanda",
        phone: "+250 788 123 456",
        website: "https://example.com",
        image: "images/business1.webp",
        membership: "Gold Member",
        description:
            "Business consulting and professional support services for local enterprises."
    },

    {
        name: "Rwanda Tech Solutions",
        category: "Technology",
        address: "KG 7 Avenue, Kigali, Rwanda",
        phone: "+250 789 234 567",
        website: "https://example.com",
        image: "images/business2.webp",
        membership: "Silver Member",
        description:
            "Technology solutions, digital services, software development and IT support."
    },

    {
        name: "Kigali Fresh Foods",
        category: "Food & Agriculture",
        address: "KN 2 Street, Kigali, Rwanda",
        phone: "+250 780 345 678",
        website: "https://example.com",
        image: "images/business3.webp",
        membership: "Gold Member",
        description:
            "Fresh local produce, food products and agricultural supplies."
    },

    {
        name: "Rwanda Construction Group",
        category: "Construction",
        address: "KG 11 Avenue, Kigali, Rwanda",
        phone: "+250 781 456 789",
        website: "https://example.com",
        image: "images/business4.webp",
        membership: "Silver Member",
        description:
            "Construction, renovation and infrastructure development services."
    },

    {
        name: "Kigali Creative Studio",
        category: "Media & Design",
        address: "KN 10 Road, Kigali, Rwanda",
        phone: "+250 782 567 890",
        website: "https://example.com",
        image: "images/business5.webp",
        membership: "Bronze Member",
        description:
            "Graphic design, photography, branding and digital media services."
    },

    {
        name: "Rwanda Financial Services",
        category: "Finance",
        address: "KN 3 Avenue, Kigali, Rwanda",
        phone: "+250 783 678 901",
        website: "https://example.com",
        image: "images/business6.webp",
        membership: "Gold Member",
        description:
            "Financial planning, accounting and business advisory services."
    },

    {
        name: "Kigali Travel & Tours",
        category: "Tourism",
        address: "KG 9 Street, Kigali, Rwanda",
        phone: "+250 784 789 012",
        website: "https://example.com",
        image: "images/business7.webp",
        membership: "Silver Member",
        description:
            "Travel planning, tour packages and tourism services across Rwanda."
    },

    {
        name: "Rwanda Health Supplies",
        category: "Healthcare",
        address: "KN 8 Road, Kigali, Rwanda",
        phone: "+250 785 890 123",
        website: "https://example.com",
        image: "images/business8.webp",
        membership: "Bronze Member",
        description:
            "Healthcare supplies and professional health-related services."
    }
];


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


// ---------- INITIAL DIRECTORY ----------

displayMembers(members);