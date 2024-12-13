const themeSelector = document.querySelector("#Theme"); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
  // check to see what the current value of our select is.
  // The current value is conveniently found in themeSelector.value!

  // if the value is dark then:
  if (themeSelector.value === "dark") {
    document.body.classList.add("dark");

    document.querySelectorAll(".logo-nba").forEach((logo)=> {
      logo.src ="../images/NBA-stats-dark.png";
    });
  } else {
    document.body.classList.remove("dark");

    document.querySelectorAll(".logo-nba").forEach((logo)=> {
      logo.src = "../images/NBA-stats.png"
    })
  }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);




// API connection and format

let teamList = [];
function output(teamList) {
  const html = teamList.map(
    (team) =>
      `<article>
        <h2>${team.id}</h2>
        <hr>
        <h2>${team.name}</h2>
        <a href="https://www.nba.com/${team.nickname}">
            <img src="${team.logo}" alt="${team.name}" style="height: 30%; width: 30%">
        </a>
        <div class="details">
            <h4>${team.nickname}</h4>
            <p>Code: ${team.code}</p>
            <h3>City: ${team.city}</h3>
        </div>
    </article>`
  );
  document.getElementById("teams").innerHTML = html.join(" ");
}

//  make the request to the API and then fetch it
const url = "https://api-nba-v1.p.rapidapi.com/teams";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d0c579fbcmshb6e1f9aff5a12d4p180a17jsn1f215555285d",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

async function getTeams(url) {
  let response = await fetch(url, options);
  console.log(response);

  if (response.ok) {
    response = await response.json();
    const r = response.response;
    console.log(r);
    //Here the code will iterate trough each Json object to confirm if there are or not certified nba teams
    r.forEach((nba) => {
      if (nba.nbaFranchise === true && nba.logo != null) {
        teamList.push(nba);
        output(teamList);
      }
    });
  }
}

getTeams(url);

function reset() {
  let articleElements = document.getElementById("teams");

  articleElements.removeChild(articleElements.firstElementChild);
}
