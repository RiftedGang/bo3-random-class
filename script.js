
const primaries = ["KN-44", "Man-O-War", "HVK-30", "ICR-1", "Argus", "VMP"];
const secondaries = ["RK5", "L-CAR 9", "Iron Jim", "Combat Knife"];
const attachments = ["Reflex", "ELO", "Laser Sight", "Suppressor", "Rapid Fire", "Long Barrel"];
const perks = ["Ante Up", "Tactical Mask", "Sixth Sense", "Fast Hands", "Dead Silence", "Flak Jacket"];
const lethals = ["Trip Mine", "Frag", "Semtex"];
const wildcards = ["Primary Gunfighter 1", "Perk 1 Greed", "Tactician", "Danger Close"];

function pickRandom(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateClass() {
  document.querySelector("h3").textContent = "Primary " + pickRandom(primaries, 1)[0];
  document.querySelectorAll(".attachments .slot").forEach((slot, i) => {
    const picks = pickRandom(attachments, 4);
    slot.textContent = picks[i] || "none";
    slot.classList.remove("empty");
  });
  document.querySelectorAll(".perk-slot").forEach((slot, i) => {
    if (i === 0 || i === 4 || i === 6) {
      slot.textContent = "none";
      slot.classList.add("empty");
    } else {
      let text = "";
      if (i === 1) text = perks[0];
      if (i === 2) text = perks[1];
      if (i === 3) text = lethals[0];
      if (i === 5) text = wildcards[0];
      slot.innerHTML = `<span>${text}</span>`;
      slot.classList.remove("empty");
    }
  });
}
