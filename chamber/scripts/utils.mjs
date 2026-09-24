// =========================================
// SHARED WEBSITE FUNCTIONS
// =========================================


// ---------- HAMBURGER MENU ----------

export function setupNavigation() {

    const navButton =
        document.querySelector("#nav-button");

    const navList =
        document.querySelector("#primary-navigation");


    if (!navButton || !navList) {
        return;
    }


    navButton.setAttribute(
        "aria-expanded",
        "false"
    );


    navButton.addEventListener("click", () => {

        const isOpen =
            navList.classList.toggle("show");


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
}


// ---------- WAYFINDING ----------

export function setupWayfinding() {

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";


    const navLinks =
        document.querySelectorAll("nav a");


    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.parentElement.classList.add(
                "active"
            );

            link.setAttribute(
                "aria-current",
                "page"
            );
        }

    });
}


// ---------- FOOTER ----------

export function setupFooter() {

    const copyrightYear =
        document.querySelector("#copyright-year");

    const lastModified =
        document.querySelector("#last-modified");


    if (copyrightYear) {

        copyrightYear.textContent =
            new Date().getFullYear();

    }


    if (lastModified) {

        lastModified.textContent =
            document.lastModified;

    }
}