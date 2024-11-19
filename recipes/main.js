import recipes from "./recipes.mjs";

// const random_num = Math.floor(Math.random() * 8);

const rec = recipes[6];
const template = `
    <img src="${rec.image}" alt="${rec.name}">
    <div class="template-content">
        <p class="tag">${rec.tags[0]}</p>
        <h2>${rec.name}</h2>
        <span id="rating" role="img" aria-label="Rating: 4 out of 5 stars">
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">⭐</span>
        <span aria-hidden="true" class="icon-star-empty">☆</span>
        </span>
        <p class="description">${rec.description}<p>
    </div>
`;
document.querySelector(".recipe-section").innerHTML = template;
