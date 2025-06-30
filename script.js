
const weapons = ["KN-44", "M8A7", "ICR-1", "VMP", "Weevil", "Locus", "Drakon", "RK5", "MR6"];
const attachments = ["Reflex", "Schnellziehen", "Schalldämpfer", "Griff", "Schaft"];
const perks1 = ["Nachbrenner", "Blinde Überwachung", "Sechster Sinn", "Kugelsich. Weste", "Übertakten", "Geist"];
const perks2 = ["Flinke Hände", "Anzahlung", "Fest verdrahtet", "Aufgespürt", "Kaltblütig", "Plünderer"];
const perks3 = ["Gung-Ho", "Strahldämpfer", "Wachsamkeit", "Taktikmaske", "Techniker", "Totenstille"];
const wildcards = ["Primärschütze 1", "Perk 1 Greifer", "Überzeugungstäter"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateClass() {
  const container = document.getElementById("class-container");
  container.innerHTML = `
    <div>Primärwaffe: ${getRandom(weapons)}</div>
    <div>Primär-Aufsatz: ${getRandom(attachments)}</div>
    <div>Sekundärwaffe: ${getRandom(weapons)}</div>
    <div>Sekundär-Aufsatz: ${getRandom(attachments)}</div>
    <div>Perk 1: ${getRandom(perks1)}</div>
    <div>Perk 2: ${getRandom(perks2)}</div>
    <div>Perk 3: ${getRandom(perks3)}</div>
    <div>Wildcard: ${getRandom(wildcards)}</div>
  `;
  document.getElementById("points-used").textContent = "10";
}
