const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
];

// Step 1: Reference the container where articles will be inserted
const contentContainer = document.querySelector(".content");

// Step 2: Loop through each article in the articles array
articles.forEach((article) => {
  // Step 3: Create a new section element and add necessary classes
  const newSection = document.createElement("section");
  newSection.classList.add("article-section"); // add any classes needed

  // Step 4: Build template literal with article data
  const articleTemplate = `
    <div class="content">
      <div class="book-info">
        <p class="date">${article.date}</p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
      </div>
      <article>
        <h2>${article.title}</h2>
        <div class="container">
          <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover" />
        </div>
        <p>${article.description} <a href="#">Read More...</a></p>
      </article>
    </div>
  `;

  // Step 5: Set innerHTML of new section to template literal
  newSection.innerHTML = articleTemplate;

  // Step 6: Append new article section to the content container
  contentContainer.appendChild(newSection);
});
// Function to create HTML for a single article
function buildArticleHTML(article) {
  return `
    <section class="article-section">
      <div class="book-info">
        <p class="date">${article.date}</p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
      </div>
      <article>
        <h2>${article.title}</h2>
        <div class="container">
          <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover" />
        </div>
        <p>${article.description} <a href="#">Read More...</a></p>
      </article>
    </section>
    <p class="filter">Filter will go here</p>
  `;
}

// Function to display all articles using Array.forEach
function displayArticles(articles) {
  const contentContainer = document.querySelector(".content"); // Reference to container
  contentContainer.innerHTML = ""; // Clear existing content

  articles.forEach((article) => {
    const articleHTML = buildArticleHTML(article); // Build HTML for each article
    contentContainer.innerHTML += articleHTML; // Append to the container
  });
}
// Call the function to display all articles
displayArticles(articles);
