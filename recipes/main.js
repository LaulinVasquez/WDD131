import recipes from "./recipes.mjs";

const rec = recipes[0]
const template = `
    <img src="${rec.image}" al="${rec.name}">
    <p class="tag">${rec.tags[0]}</p>
    <h2>${rec.name}</h2>
`
document.querySelector(".recipe-section").innerHTML = template;