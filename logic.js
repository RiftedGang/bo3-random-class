
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateClass() {
  const weapons = ["KN‑44", "ICR‑1", "M8A7", "Man-O-War"];
  const attachments = ["Schaft", "Griff", "Schnellziehen", "Magazinerweiterung"];
  const perks = ["Geist", "Plünderer", "Flinke Hände", "Totenstille"];
  const grenades = ["Splittergranate", "EMP", "Blendgranate", "Taktikgranate"];
  const wildcards = ["Primärschütze 1", "Perk 1 Greifer", "Taktikbonus"];
  const specialist = ["Prophet - Glitch", "Battery - War Machine", "Outrider - Vision Pulse"];

  document.getElementById("primary-weapon").innerText = getRandom(weapons);
  document.getElementById("secondary-weapon").innerText = getRandom(weapons);

  const pa = document.getElementById("primary-attachments");
  const sa = document.getElementById("secondary-attachments");
  pa.innerHTML = "";
  sa.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    pa.innerHTML += "<div>" + getRandom(attachments) + "</div>";
    sa.innerHTML += "<div>" + getRandom(attachments) + "</div>";
  }

  const pk = document.getElementById("perks");
  pk.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    pk.innerHTML += "<div>" + getRandom(perks) + "</div>";
  }

  const gr = document.getElementById("grenades");
  gr.innerHTML = "";
  gr.innerHTML += "<div>" + getRandom(grenades) + "</div>";

  const wc = document.getElementById("wildcards");
  wc.innerHTML = "";
  wc.innerHTML += "<div>" + getRandom(wildcards) + "</div>";

  document.getElementById("specialist").innerText = getRandom(specialist);
  document.getElementById("pick-count").innerText = "10";
}
