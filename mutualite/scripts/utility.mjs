// Setup navigation 
export function setupNavigation() {
    const navbtn = document.querySelector("#nav-button");
    const nav = document.querySelector("#navigation");

    navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");

    const isOpen = nav.classList.toggle("show");

    navbtn.setAttribute("aria-expanded", isOpen);
});
}

// Setup the footer //
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