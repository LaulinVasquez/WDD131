
import { getTeams, output, searchTeams } from "./nba-api.js";

// Display the current date
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
document.getElementById("date").innerHTML = `${day}-${month}-${year}`;

// Fetch and display NBA teams
(async function fetchAndDisplayTeams() {
  const teams = await getTeams();
  output(teams);
})();

// Carousel functionality
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Theme selector
const themeSelector = document.querySelector("#Theme");
themeSelector.addEventListener("change", () => {
  if (themeSelector.value === "dark") {
    document.body.classList.add("dark");
    document.querySelectorAll(".logo-nba").forEach((logo) => {
      logo.src = "../images/NBA-stats-dark.png";
    });
  } else {
    document.body.classList.remove("dark");
    document.querySelectorAll(".logo-nba").forEach((logo) => {
      logo.src = "../images/NBA-stats.png";
    });
  }
});

// Search functionality
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filteredTeams = searchTeams(query);
  output(filteredTeams);

  if (filteredTeams.length === 0) {
    document.getElementById("teams").innerHTML = "<p>No teams found.</p>";
  }
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.toLowerCase();
    const filteredTeams = searchTeams(query);
    output(filteredTeams);

    if (filteredTeams.length === 0) {
      document.getElementById("teams").innerHTML = "<p>No teams found.</p>";
    }
  }
});
