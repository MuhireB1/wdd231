// =========================================
// BUSINESS SPOTLIGHTS
// =========================================

import { fetchMembers } from "./api.mjs";
import { displaySpotlights } from "./ui.mjs";


// ---------- LOAD SPOTLIGHTS ----------

export async function loadSpotlights() {

    const spotlights =
        document.querySelector("#spotlights");

    try {

        const data = await fetchMembers();


        // Keep only Gold and Silver Members
        const qualifiedMembers = data.filter(member =>
            member.membership === "Gold Member" ||
            member.membership === "Silver Member"
        );


        // Randomly select 3 members
        const selectedMembers =
            getRandomMembers(
                qualifiedMembers,
                3
            );


        displaySpotlights(selectedMembers);

    } catch (error) {

        console.error(
            "Member data error:",
            error
        );

        spotlights.innerHTML = `
            <p>
                Unable to load business spotlights.
            </p>
        `;
    }
}


// ---------- RANDOM MEMBERS ----------

function getRandomMembers(members, number) {

    const shuffled =
        [...members].sort(
            () => Math.random() - 0.5
        );

    return shuffled.slice(0, number);
}