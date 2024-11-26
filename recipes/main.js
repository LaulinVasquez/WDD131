import recipes from "./recipes.mjs";

// Function to generate a random recipe
function getRandomListEntry(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Template function to render a single recipe
function template(rec) {
  return `
    <img src="${rec.image}" alt="${rec.name}">
    <div class="template-content">
        <p class="tag">${tagsTemplate(rec)}</p>
        <h2>${rec.name}</h2>
        ${ratingTemplate(rec.rating)}
        <p class="description">${rec.description}</p>
    </div>
  `;
}

function tagsTemplate(tags) {
  const html = tags.tags.find((tag) => tag);
  return html;
}


function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }

  html += `</span>`;
  return html;
}


function renderRecipes(recipeList) {
  const recipeSection = document.querySelector(".recipe-section");
  const recipesHTML = recipeList.map((recipe) => template(recipe)).join("");
  recipeSection.innerHTML = recipesHTML;
}


function filter(query) {
  const filtered = recipes.filter((recipe) =>
    filterFunction(recipe, query)
  );
  const sorted = filtered.sort(sortFunction);
  return sorted;
}


function filterFunction(recipe, query) {
  return (
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query)
  );
}


function sortFunction(a, b) {
  return a.name.localeCompare(b.name);
}


function searchHandler(e) {
  e.preventDefault();

  const searchInput = document.querySelector(".search-bar input");
  const query = searchInput.value.toLowerCase();

  const filteredRecipes = filter(query);

  renderRecipes(filteredRecipes);
}

// Add event listeners
function setupSearch() {
  const searchButton = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  // Listen for button click
  searchButton.addEventListener("click", searchHandler);


  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchHandler(e);
    }
  });
}


function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
  setupSearch(); 
}

init();
