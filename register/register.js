/*  
* 1 When the page loads set the current number of participants equal to 1
* 2 Add an event listener to the button. When it is clicked the following should happen:
* 3 Add one to the count of participants.
* 4 Create a copy of the HTML that makes up the participant section of the form. (<section class="participant1">)
* 5 Note that id attributes are supposed to be unique. If we create an exact copy of that section then we will have duplicate ids. So the next step would be to update the ids of each element with something to make it unique.
* 6 Insert the new HTML into the participants fieldset. Ideally we would want to insert the new participant after the last participant and before the Add button. */

document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1; // 1st requirement completed when the page loads

  function addParticipant() {
    participantCount++; // 3rd: increment participant count and add participant

    const participantTemplate = document.querySelector(".participant1");
    // 4th: create a copy of the HTML and update the ID attributes which are supposed to be unique

    const newParticipant = participantTemplate.cloneNode(true); // clone the participant1 section with the field set, set true to clone it with the whole subtree
    //5th: Update the class name with the participant count so every time you click the button is a new one:
    newParticipant.className = `Participant${participantCount}`;

    const heading = newParticipant.querySelector("p");
    heading.textContent = `Participant ${participantCount}`; //update header ex: participant 1

    // set the rest of the subtree in the clone participant
    const inputsElements = newParticipant.querySelectorAll(
      "label,input, select"
    );

    inputsElements.forEach((input) => {
      if (input.tagName === "SELECT" || input.tagName == "INPUT") {
        const newId = input.getAttribute("id") + participantCount;
        input.setAttribute("id", newId);

        if (input.hasAttribute("name")) {
          const newName = input.getAttribute("name") + participantCount;
          input.setAttribute("name", newName);
        }
      }
      if (input.tagName === "INPUT") {
        input.value = "";
      }
      else if (input.tagNamev === "LABEL"){
        const newfor = input.getAttribute("for") + participantCount;
        input.setAttribute("for", newId);
      }
    });
    // 6th: insert new HTML participant clone before the button
    const button = document.getElementById("add");
    button.parentNode.insertBefore(newParticipant, button);
  }
    // 2nd: add Eventlistener to the button   
  const addNewParticipant = document.getElementById("add");
  addNewParticipant.addEventListener("click", addParticipant);
});

// Add submit event listener to the form
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Step 3: Find all fee inputs and sum the values
  const feeInputs = document.querySelectorAll('input[name^="fee"]'); // Matches all inputs named "fee" (including numbered ones)
  let totalFees = 0;
  feeInputs.forEach(input => {
    const feeValue = parseFloat(input.value) || 0; // Convert to number, default to 0 if empty
    totalFees += feeValue;
  });

  // Step 4: Get the adult name from the form
  const adultName = document.getElementById('adult_name').value;

  // Step 5: Hide the form and show the summary message
  const formElement = document.querySelector('form');
  formElement.style.display = 'none';

  // Step 6: Display the summary
  const summaryElement = document.getElementById('summary');
  summaryElement.style.display = 'block';

  // Number of participants is the length of feeInputs
  const participantCount = feeInputs.length;

  // Display the summary message with name, participant count, and total fees
  summaryElement.innerHTML = `
    <h1>FSY CAMP</h1>
    <p>Thank you, ${adultName}, for registering.</p>
    <p>You have registered ${participantCount} participant(s) and owe: $${totalFees.toFixed(2)} in fees.</p>
  `;
});