const params = new URLSearchParams(window.location.search);
const firstName = params.get("FirstName");
const title = document.querySelector("#thank-you-title");
const message = document.querySelector("#thank-you-message");
const details = document.querySelector("#submission-details");

if (firstName) {
    title.textContent = `Thank you, ${firstName}`;
}

const values = [...params.entries()].filter(([, value]) => value.trim());

if (values.length) {
    const list = document.createElement("dl");
    list.className = "submission-list";

    for (const [key, value] of values) {
        const term = document.createElement("dt");
        const description = document.createElement("dd");
        term.textContent = key.replace(/([a-z])([A-Z])/g, "$1 $2");
        term.textContent = term.textContent.charAt(0).toUpperCase() + term.textContent.slice(1);
        description.textContent = value;
        list.append(term, description);
    }

    details.replaceChildren(list);
} else {
    message.textContent = "Thank you for visiting. You can choose a program and submit a support pledge whenever you are ready.";
}
