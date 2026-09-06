const menuButton = document.querySelector('#nav-button');

// Toggle the navigation menu when the button is clicked
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("show");
    navMenu.classList.toggle("show");
});

const navMenu = document.querySelector('#nav-bar');
navMenu.addEventListener('click', () => {
    navMenu.classList.toggle("show");
    menuButton.classList.toggle("show");
})