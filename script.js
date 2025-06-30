
document.addEventListener("DOMContentLoaded", () => {
  const primaryWeapons = ["M8A7", "ICR-1", "KN-44", "HVK-30"];
  const secondaryWeapons = ["RK5", "L-CAR 9", "XM-53"];
  const attachments = ["Schnellziehen", "Schaft", "Langer Lauf", "Magazinerweiterung"];
  const sights = ["Reflexvisier", "BOA 3", "ELO"];
  const perks = ["Flinkheit", "Totenstille", "Ghost", "Überlebenskünstler"];
  const tacticals = ["EMP-Granate", "Blendgranate", "Schockladung"];
  const lethals = ["Splittergranate", "Semtex", "Thermit"];
  const wildcards = ["Primärwaffe 1", "Primärwaffe 2", "Taktik +1"];
  const specialists = ["Prophet – Glitch", "Seraph – Annihilator", "Nomad – Rejack"];

  const slots = document.querySelectorAll(".slot-desc");
  const footer = document.querySelector(".footer");

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateClass() {
    let points = 0;
    let usedWildcards = [];

    const selected = [];

    function addItem(slotIndex, content, pointCost = 1) {
      if (points + pointCost > 10) return false;
      slots[slotIndex].textContent = content;
      points += pointCost;
      return true;
    }

    let slotIndex = 0;

    // Primary Weapon
    addItem(slotIndex++, getRandomItem(primaryWeapons)); // Waffe
    addItem(slotIndex++, getRandomItem(sights)); // Visier

    let extraAttachments = 2;
    if (Math.random() < 0.5) {
      usedWildcards.push("Primärwaffe 1");
      addItem(slotIndex++, "Wildcard: Primärwaffe 1", 0);
      extraAttachments++;
    }
    if (Math.random() < 0.5 && usedWildcards.includes("Primärwaffe 1")) {
      usedWildcards.push("Primärwaffe 2");
      addItem(slotIndex++, "Wildcard: Primärwaffe 2", 0);
      extraAttachments++;
    }

    for (let i = 0; i < 4; i++) {
      if (i < extraAttachments) addItem(slotIndex++, getRandomItem(attachments));
      else slots[slotIndex++].textContent = "";
    }

    // Secondary Weapon
    addItem(slotIndex++, getRandomItem(secondaryWeapons));
    addItem(slotIndex++, getRandomItem(sights));
    addItem(slotIndex++, getRandomItem(attachments));
    addItem(slotIndex++, getRandomItem(attachments));

    // Perks (up to 2 per tier)
    for (let i = 0; i < 6; i++) {
      if (!addItem(slotIndex++, getRandomItem(perks))) break;
    }

    // Lethal + Tactical
    for (let i = 0; i < 4; i++) {
      if (!addItem(slotIndex++, i < 2 ? getRandomItem(lethals) : getRandomItem(tacticals))) break;
    }

    // Wildcards
    for (let i = 0; i < 3; i++) {
      if (usedWildcards[i]) {
        addItem(slotIndex++, usedWildcards[i], 0);
      } else {
        slots[slotIndex++].textContent = "";
      }
    }

    // Specialist
    slots[slotIndex++].textContent = getRandomItem(specialists);

    footer.textContent = `Auswahlpunkte: ${points} / 10`;
  }

  document.querySelector(".random-button").addEventListener("click", generateClass);
});
