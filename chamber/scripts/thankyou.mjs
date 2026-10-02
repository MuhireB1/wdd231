import { setupNavigation, setupWayfinding } from "./utils.mjs";

setupWayfinding();
setupNavigation();

// Get information from the URL
const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const organizationName = params.get("organizationName");
const timestamp = params.get("timestamp");


// Find the area where information will be displayed
const formData = document.querySelector("#form-data");


// Display submitted information
if (formData) {

    formData.innerHTML = `
        <p>
            <strong>First Name:</strong>
            ${firstName || "Not provided"}
        </p>

        <p>
            <strong>Last Name:</strong>
            ${lastName || "Not provided"}
        </p>

        <p>
            <strong>Email:</strong>
            ${email || "Not provided"}
        </p>

        <p>
            <strong>Mobile Number:</strong>
            ${phone || "Not provided"}
        </p>

        <p>
            <strong>Business Name:</strong>
            ${organizationName || "Not provided"}
        </p>

        <p>
            <strong>Date Submitted:</strong>
            ${formatDate(timestamp)}
        </p>
    `;
}


// Format timestamp
function formatDate(timestamp) {

    if (!timestamp) {
        return "Not provided";
    }

    const date = new Date(timestamp);

    return date.toLocaleString("en-RW", {
        dateStyle: "full",
        timeStyle: "short"
    });
}