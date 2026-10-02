import { setupNavigation, setupWayfinding } from "./utils.mjs";
// ================================
// MEMBERSHIP MODALS
// ================================
const modalLinks = document.querySelectorAll(".modal-link");
const closeButtons = document.querySelectorAll(".close-modal");

modalLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const modalId = link.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.showModal();
        }
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");

        if (modal) {
            modal.close();
        }
    });
});


// ================================
// TIMESTAMP
// ================================

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

setupWayfinding();
setupNavigation();