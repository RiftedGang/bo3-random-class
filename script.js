
const data = {
  primaryWeapons: ["KN-44", "M8A7", "ICR-1"],
  secondaryWeapons: ["RK5", "L-CAR 9"],
  attachments: ["Schaft", "Griff", "Schnellziehen", "Schnellfeuer", "Magazinerw.", "Laser"],
  perks: ["Geist", "Flinke Hände", "Totenstille", "Techniker", "Plünderer"],
  equipment: ["Splittergranate", "EMP", "Blendgranate", "Schockladung"],
  wildcards: ["Primärschütze 1", "Perk 1 Greifer", "Überzeugungstäter"],
  specialists: ["Prophet – Glitch", "Outrider – Vision", "Battery – War Machine"]
};

function getRandomUnique(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateClass() {
  const pointsDisplay = document.getElementById("points");
  let points = 0;
  const chosen = {};

  chosen.primary = getRandomUnique(data.primaryWeapons, 1);
  points += 1;

  chosen.primaryAttachments = getRandomUnique(data.attachments, 2);
  points += 2;

  chosen.secondary = getRandomUnique(data.secondaryWeapons, 1);
  points += 1;

  chosen.perks = getRandomUnique(data.perks, 2);
  points += 2;

  chosen.equipment = getRandomUnique(data.equipment, 2);
  points += 2;

  let wildcardsLeft = 10 - points;
  chosen.wildcards = getRandomUnique(data.wildcards, wildcardsLeft);
  points += chosen.wildcards.length;

  chosen.specialist = getRandomUnique(data.specialists, 1);

  pointsDisplay.textContent = `Auswahlpunkte: ${points} / 10`;

  const render = (id, items) => {
    const div = document.getElementById(id);
    div.innerHTML = "";
    items.forEach(item => {
      const el = document.createElement("div");
      el.className = "slot";
      el.textContent = item;
      div.appendChild(el);
    });
  };

  render("primary", [...chosen.primary, ...chosen.primaryAttachments]);
  render("secondary", chosen.secondary);
  render("perks", chosen.perks);
  render("equipment", chosen.equipment);
  render("wildcards", chosen.wildcards);
  render("specialist", chosen.specialist);
}
