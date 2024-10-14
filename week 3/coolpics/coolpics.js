document.getElementById("menu-btn").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
});

function handleResize() {
  const menu = document.querySelector("#menu-btn");

  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Function to create the viewer template
function viewerTemplate(path, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${path}" alt="${alt}">
    </div>`;
}

// The event handler for showing the full image
function viewHandler(event) {
  // Step 1: Get the clicked element
  const target = event.target;

  // Step 2: Get the src attribute and split it by "-"
  const src = target.getAttribute("src");
  const srcParts = src.split('-');

  // Step 3: Construct the new image file name
  const newSrc = `${srcParts[0]}-full.jpeg`;

  // Step 4: Insert the viewerTemplate into the top of the body
  const altText = target.getAttribute("alt");
  const viewerHtml = viewerTemplate(newSrc, altText);
  document.body.insertAdjacentHTML("afterbegin", viewerHtml);

  // Step 5: Add a listener to the close button (X) to call closeViewer
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

// The function to close the image viewer
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove(); // Removes the viewer div from the DOM
  }
}

// Adding event listeners to each gallery section
const gallerySections = document.querySelectorAll(".gallery");
gallerySections.forEach(img => {
  img.addEventListener("click", viewHandler); // Attach the viewHandler to each image
});
