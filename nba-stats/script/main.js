const themeSelector = document.querySelector("#Theme");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");

        document.querySelector(".logo-nba").src ="../images/NBA-stats-dark.png"
    }
    else {
        document.body.classList.remove("dark");

        document.querySelector(".logo-nba").src = "../images/NBA-stats.png"
    }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);