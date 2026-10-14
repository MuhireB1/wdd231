// Setup navigation 
export function setupNavigation() {
    const navbtn = document.querySelector("#nav-button");
    const nav = document.querySelector("#navigation");

    if (!navbtn || !nav) {
        return;
    }

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

export function displayDialog() {
    const joinbtn = document.querySelector("#joinbtn");
    const joinModal = document.querySelector("#joinModal");
    const closeModal = document.querySelector("#closeModal");

    if (!joinbtn || !joinModal || !closeModal) {
        return;
    }

    //open modal when Join is clicked
    joinbtn.addEventListener("click", () => {
        joinModal.showModal();
    });

    // Close Modal when close Modal btn is clicked
    closeModal.addEventListener("click", () => {
        joinModal.close();
    });

};

// Display form information after submission
export function displayFormInfo() {
    const joinForm = document.querySelector("#joinForm");
    const submitInfo = document.querySelector("#submitInfo");
    const joinModal = document.querySelector("#joinModal");
    const formInfoModal = document.querySelector("#formInfoModal");
    const closeInfoModal = document.querySelector("#closeInfoModal");

    if (!joinForm || !submitInfo || !joinModal || !formInfoModal || !closeInfoModal) {
        return;
    }

    joinForm.addEventListener("submit", (event) => {
        // Prevent the page from reloading
        event.preventDefault();

        // Get submitted values directly from the form
        const params = new FormData(joinForm);

        const firstName = params.get("FirstName");
        const lastName = params.get("LastName");
        const email = params.get("email");
        const member = params.get("Membership");

        // Create the confirmation heading
        const heading = document.createElement("h3");
        heading.textContent = `Welcome, ${firstName}!`;
        heading.style.textAlign = "center";

        // Create the confirmation message
        const message = document.createElement("p");
        message.textContent =
            `Thank you, ${firstName} ${lastName}, for joining our community.`;
                // Apply inline CSS
            message.style.color = "black";
            message.style.fontSize = "16px";
            message.style.fontWeight = "normal";
            message.style.textAlign = "center";

        // Display email
        const emailInfo = document.createElement("p");
        emailInfo.textContent = `Your email: ${email}`;
        // Apply inline CSS
        emailInfo.style.color = "black";
        emailInfo.style.fontSize = "16px";
        emailInfo.style.fontWeight = "normal";
        emailInfo.style.textAlign = "center";

        // Display membership category
        const memberInfo = document.createElement("p");
        memberInfo.textContent = `Membership category: ${member}`;
        memberInfo.style.color = "black";
        memberInfo.style.fontSize = "16px";
        memberInfo.style.fontWeight = "normal";
        memberInfo.style.textAlign = "center";

        // Display all dynamically created elements
        submitInfo.replaceChildren(
            heading,
            message,
            emailInfo,
            memberInfo
        );

        joinModal.close();
        formInfoModal.showModal();
    });

    closeInfoModal.addEventListener("click", () => {
        formInfoModal.close();
    });
}