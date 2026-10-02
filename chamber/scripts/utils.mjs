// =========================================
// SHARED WEBSITE FUNCTIONS
// =========================================


// ---------- HAMBURGER MENU ----------
export function setupNavigation() {
    const navButton = document.querySelector("#nav-button");
    const navList = document.querySelector("#primary-navigation");

    if (!navButton || !navList) return;

    navButton.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("show");

        navButton.setAttribute("aria-expanded", String(isOpen));
        navButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

// ---------- WAYFINDING ----------
export function setupWayfinding() {
    const page = window.location.pathname.split("/").pop().toLowerCase();
    const currentPage = page === "thankyou.html" ? "join.html" : page || "index.html";

    document.querySelectorAll("nav a").forEach((link) => {
        const linkPage = new URL(link.href).pathname.split("/").pop().toLowerCase();
        const isCurrentPage = linkPage === currentPage;

        link.parentElement.classList.toggle("active", isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// ...existing code...


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