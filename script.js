
const primaries = ["KN-44", "Man-O-War", "HVK-30", "ICR-1", "Argus", "VMP"];
const secondaries = ["RK5", "L-CAR 9", "Iron Jim", "Kampfmesser"];
const aufsätze = ["Reflex", "ELO", "Laser", "Schalldämpfer", "Feuerrate", "Langer Lauf"];
const extras = ["Ante Up", "Taktikmaske", "6. Sinn", "Schnelle Hände", "Tote Stille", "Sprengschutz"];
const granaten = ["Minen", "Splittergranate", "Semtex"];
const wildcards = ["Primär-Experte 1", "Extra 1 Gier", "Taktiker", "Gefährlich"];

function zufall(arr, anzahl) {
  const gemischt = [...arr].sort(() => 0.5 - Math.random());
  return gemischt.slice(0, anzahl);
}

function generateClass() {
  document.querySelector("h3").textContent = "Primärwaffe: " + zufall(primaries, 1)[0];
  document.querySelectorAll(".attachments .slot").forEach((slot, i) => {
    const picks = zufall(aufsätze, 4);
    slot.textContent = picks[i] || "leer";
    slot.classList.remove("empty");
  });
  document.querySelectorAll(".perk-slot").forEach((slot, i) => {
    if (i === 0 || i === 4 || i === 6) {
      slot.textContent = "leer";
      slot.classList.add("empty");
    } else {
      let text = "";
      if (i === 1) text = extras[0];
      if (i === 2) text = extras[1];
      if (i === 3) text = granaten[0];
      if (i === 5) text = wildcards[0];
      slot.innerHTML = `<span>${text}</span>`;
      slot.classList.remove("empty");
    }
  });
}
