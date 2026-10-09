import { setupNavigation, setupWayfinding } from "./utils.mjs";
setupWayfinding();
setupNavigation();
import { places } from "../data/places.mjs";

const showHere = document.querySelector("#all-places");

// Loop through the places array and create a card for each place
function displayPlaces() {
    places.forEach(place => {
        // build card element
        const card = document.createElement("div");
        //Build photo elememnt
        const photo = document.createElement("img");
        photo.src = place["image-url"];
        photo.alt = place.name;
        card.appendChild(photo);
        // build the title
        const title = document.createElement("h2");
        title.innerHTML = place.name;
        card.appendChild(title);
        // build address
        const address = document.createElement("p");
        address.innerHTML = place.address;
        card.appendChild(address);
        // build description
        const description = document.createElement("address");
        description.innerHTML = place.description;
        card.appendChild(description);
        // append the card to the container
        showHere.appendChild(card);
    });
};

displayPlaces();
