const modal = document.querySelector("#modal");
const openModal= document.querySelector(".openModal");
const closeModal = document.querySelector("#closeModal");

// Add EventListener
openModal.addEventListener("click", () => {
    modal.showModal();
});
closeModal.addEventListener("click", () => {
    modal.close();
});
