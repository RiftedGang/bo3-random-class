
const weapons = ["KN-44", "ICR-1", "HVK-30", "Man-O-War", "M8A7"];
const attachments = ["Reflex", "Schnellziehen", "Schaft", "Magazin", "Schalldämpfer"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomClass() {
  const primaryGrid = document.getElementById("primary-grid");
  primaryGrid.innerHTML = "";

  let pointCounter = 1; // 1 for primary weapon
  const weaponSlot = document.createElement("div");
  weaponSlot.className = "slot";
  weaponSlot.innerHTML = `<div>${getRandomItem(weapons)}</div><div class="slot-label">Waffe</div>`;
  primaryGrid.appendChild(weaponSlot);

  for (let i = 1; i <= 3; i++) {
    const attachment = document.createElement("div");
    attachment.className = "slot";
    attachment.innerHTML = `<div>${getRandomItem(attachments)}</div><div class="slot-label">Aufsatz ${i}</div>`;
    primaryGrid.appendChild(attachment);
    pointCounter++;
  }

  document.getElementById("point-counter").innerText = `Auswahlpunkte: ${pointCounter} / 10`;
}
