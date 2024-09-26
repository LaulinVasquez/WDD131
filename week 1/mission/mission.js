const themeSelector = document.querySelector("#Theme");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");

        document.querySelector(".logo").src ="./image/byui-logo_white.png"
    }
    else {
        document.body.classList.remove("dark");

        document.querySelector(".logo").src = "./image/byui-logo_blue.webp"
    }
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);