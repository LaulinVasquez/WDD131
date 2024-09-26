const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const nP = document.createElement("h1");
nP.innerText = "New title added as well";
document.body.appendChild(nP);

const nImg = document.createElement("img");
nImg.setAttribute("src","https://picsum.photos/200");
nImg.setAttribute("alt", "picture_Js");
document.body.appendChild(nImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv)

const topic = document.createElement("section");
topic.innerHTML = "<h2>DOM basics</h2><p> This was added with JavaScript</p>";
document.body.appendChild(topic);