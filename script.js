
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomClass() {
  const weapons = ["KN‑44", "ICR‑1", "M8A7", "HVK‑30"];
  const attachments = ["Schaft", "Griff", "Schnellziehen", "Magazinerweiterung"];
  const perks = ["Flinke Hände", "Geist", "Totenstille", "Plünderer"];
  const pickLimit = 10;

  let usedPoints = 0;
  const output = document.getElementById("output-grid");
  output.innerHTML = "";

  const slots = [
    { label: "Primärwaffe", value: getRandomItem(weapons) },
    { label: "Aufsatz 1", value: getRandomItem(attachments) },
    { label: "Aufsatz 2", value: getRandomItem(attachments) },
    { label: "Perk 1", value: getRandomItem(perks) },
    { label: "Perk 2", value: getRandomItem(perks) },
    { label: "Sekundärwaffe", value: getRandomItem(weapons) },
    { label: "Tödlich", value: "Granate" },
    { label: "Taktisch", value: "Blendgranate" },
    { label: "Wildcard", value: "Primärschütze 1" },
    { label: "Spezialist", value: "Heat Wave" }
  ];

  slots.forEach(slot => {
    const el = document.createElement("div");
    el.className = "slot";
    el.innerHTML = `<div>+</div><div class="slot-label">${slot.label}</div><div class="slot-desc">${slot.value}</div>`;
    output.appendChild(el);
  });

  document.getElementById("pick-counter").innerText = "Auswahlpunkte: " + slots.length + " / " + pickLimit;
}
