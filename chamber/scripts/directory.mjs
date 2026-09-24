// =========================================
// DIRECTORY PAGE
// =========================================

import { fetchMembers } from "./api.mjs";
import { displayMembers } from "./ui.mjs";
import {
    setupNavigation,
    setupWayfinding,
    setupFooter
} from "./utils.mjs";


// ---------- LOAD DIRECTORY ----------

async function loadDirectory() {

    const directoryContainer =
        document.querySelector("#directory-container");

    try {

        const data = await fetchMembers();

        displayMembers(data);

        setupViewButtons();

    } catch (error) {

        console.error(
            "Error fetching directory data:",
            error
        );

        directoryContainer.innerHTML = `
            <p>
                Sorry, we are unable to load the directory
                at this time. Please try again later.
            </p>
        `;
    }
}


// ---------- GRID / LIST VIEW ----------

function setupViewButtons() {

    const directoryContainer =
        document.querySelector("#directory-container");

    const gridButton =
        document.querySelector("#grid-view");

    const listButton =
        document.querySelector("#list-view");


    gridButton.addEventListener("click", () => {

        directoryContainer.classList.remove("list-view");

        directoryContainer.classList.add("grid-view");

        gridButton.setAttribute(
            "aria-pressed",
            "true"
        );

        listButton.setAttribute(
            "aria-pressed",
            "false"
        );
    });


    listButton.addEventListener("click", () => {

        directoryContainer.classList.remove("grid-view");

        directoryContainer.classList.add("list-view");

        listButton.setAttribute(
            "aria-pressed",
            "true"
        );

        gridButton.setAttribute(
            "aria-pressed",
            "false"
        );
    });
}


// ---------- SHARED FUNCTIONS ----------

setupNavigation();

setupWayfinding();

setupFooter();


// ---------- START DIRECTORY ----------

loadDirectory();