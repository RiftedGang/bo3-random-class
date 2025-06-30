
const data = {
  primaryWeapons: ["ICR-1", "KN-44", "Man-O-War", "M8A7"],
  secondaryWeapons: ["RK5", "MR6", "L-CAR 9"],
  attachments: ["Schaft", "Griff", "Magazinerweiterung", "Schnellziehen", "Schnellfeuer", "Laser"],
  perks: ["Geist", "Flinke Hände", "Plünderer", "Totenstille", "Techniker"],
  lethal: ["Splittergranate", "Tripmine"],
  tactical: ["EMP", "Blendgranate"],
  wildcards: ["Primärschütze 1", "Perk 1 Greifer", "Überzeugungstäter"],
  specialists: ["Outrider - Vision Pulse", "Prophet - Glitch", "Battery - War Machine"]
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateClass() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  let points = 0;
  const chosen = {
    primary: getRandom(data.primaryWeapons),
    secondary: getRandom(data.secondaryWeapons),
    attachments: [],
    perks: [],
    lethal: getRandom(data.lethal),
    tactical: getRandom(data.tactical),
    wildcards: [],
    specialist: getRandom(data.specialists)
  };

  points += 1; // Primary
  points += 1; // Secondary
  for (let i = 0; i < 2; i++) {
    const att = getRandom(data.attachments);
    if (!chosen.attachments.includes(att)) {
      chosen.attachments.push(att);
      points++;
    }
  }

  for (let i = 0; i < 2; i++) {
    const p = getRandom(data.perks);
    if (!chosen.perks.includes(p)) {
      chosen.perks.push(p);
      points++;
    }
  }

  points += 1; // Lethal
  points += 1; // Tactical

  while (points < 10) {
    const wc = getRandom(data.wildcards);
    if (!chosen.wildcards.includes(wc)) {
      chosen.wildcards.push(wc);
      points++;
    }
  }

  document.getElementById("points").textContent = `Auswahlpunkte: ${points}/10`;

  output.innerHTML = `
    <div><strong>Primärwaffe:</strong> ${chosen.primary}</div>
    <div><strong>Aufsätze:</strong> ${chosen.attachments.join(", ")}</div>
    <div><strong>Sekundärwaffe:</strong> ${chosen.secondary}</div>
    <div><strong>Perks:</strong> ${chosen.perks.join(", ")}</div>
    <div><strong>Granaten:</strong> ${chosen.lethal}, ${chosen.tactical}</div>
    <div><strong>Wildcards:</strong> ${chosen.wildcards.join(", ")}</div>
    <div><strong>Specialist:</strong> ${chosen.specialist}</div>
  `;
}
