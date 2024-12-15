
const url = "https://api-nba-v1.p.rapidapi.com/teams";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d0c579fbcmshb6e1f9aff5a12d4p180a17jsn1f215555285d",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

let teamList = [];

// Function to fetch teams from the API
export async function getTeams() {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Failed to fetch NBA teams.");
    const data = await response.json();
    const r = data.response;

    r.forEach((nba) => {
      if (nba.nbaFranchise === true && nba.logo != null) {
        teamList.push(nba);
      }
    });

    return teamList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to render teams on the page
export function output(teamList, containerId = "teams") {
  const html = teamList.map(
    (team, index) =>
      `<article>
        <h2>${index + 1}</h2>
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
  document.getElementById(containerId).innerHTML = html.join(" ");
}

// Function to search teams
export function searchTeams(query) {
  return teamList.filter(
    (team) =>
      team.name.toLowerCase().includes(query) ||
      team.code.toLowerCase().includes(query) 
  );
}
