// register.js

import { addParticipant } from "./Templates.mjs";

document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;

    // Event listener for "Add Participant" button
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", () => {
        // Create a new participant section and insert it before the button
        const newParticipant = addParticipant();
        addButton.insertAdjacentElement("beforebegin", newParticipant);
    });

    // Function to calculate total fees from all participant fee inputs
    function calculateTotalFees() {
        const feeElements = document.querySelectorAll("[id^=fee]");
        return [...feeElements].reduce((total, input) => {
            const feeValue = parseFloat(input.value) || 0;
            return total + feeValue;
        }, 0);
    }

    // Function to create and display the summary message
    function displaySummary(adultName, participantCount, totalFees) {
        const summaryElement = document.getElementById("summary");
        summaryElement.style.display = "block";
        summaryElement.innerHTML = `
            <h1>FSY CAMP</h1>
            <p>Thank you, ${adultName}, for registering.</p>
            <p>You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in fees.</p>
        `;
    }

    // Event listener for form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Get the adult name
        const adultName = document.getElementById("adult_name").value;

        // Calculate the number of participants and total fees
        const participantCount = document.querySelectorAll(".participant1, .participant2, .participant3").length;
        const totalFees = calculateTotalFees();

        // Hide the form
        form.style.display = "none";

        // Display the summary message
        displaySummary(adultName, participantCount, totalFees);
    });
});
