/*  
* 1 When the page loads set the current number of participants equal to 1
* 2 Add an event listener to the button. When it is clicked the following should happen:
* 3 Add one to the count of participants.
* 4 Create a copy of the HTML that makes up the participant section of the form. (<section class="participant1">)
* 5 Note that id attributes are supposed to be unique. If we create an exact copy of that section then we will have duplicate ids. So the next step would be to update the ids of each element with something to make it unique.
* 6 Insert the new HTML into the participants fieldset. Ideally we would want to insert the new participant after the last participant and before the Add button. */

// Templates.mjs

let participantCount = 1; // Initialize participant count

// Function to create and return a new participant section
export function addParticipant() {
    participantCount++; // Increment participant count

    // Select the initial participant section template to clone
    const participantTemplate = document.querySelector(".participant1");

    // Clone the participant section along with its entire subtree
    const newParticipant = participantTemplate.cloneNode(true);

    // Update class name to reflect new participant count
    newParticipant.className = `participant${participantCount}`;

    // Update header text to show the participant number
    const heading = newParticipant.querySelector("p");
    heading.textContent = `Participant ${participantCount}`;

    // Update IDs, names, and reset values in cloned participant section
    const inputElements = newParticipant.querySelectorAll("label, input, select");

    inputElements.forEach((element) => {
        if (element.tagName === "INPUT" || element.tagName === "SELECT") {
            // Create new unique ID by appending participant count
            const newId = element.getAttribute("id") + participantCount;
            element.setAttribute("id", newId);

            // Update the name attribute if it exists
            if (element.hasAttribute("name")) {
                const newName = element.getAttribute("name") + participantCount;
                element.setAttribute("name", newName);
            }

            // Clear any pre-existing value in the input fields
            if (element.tagName === "INPUT") {
                element.value = "";
            }
        }

        // Update label's "for" attribute to match the new input ID
        if (element.tagName === "LABEL") {
            const newFor = element.getAttribute("for") + participantCount;
            element.setAttribute("for", newFor);
        }
    });

    return newParticipant; // Return the new participant section for insertion
}

