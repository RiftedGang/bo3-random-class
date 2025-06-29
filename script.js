const standardPrimary = [
  "KN-44", "HVK-30", "ICR-1", "Man-O-War", "Sheiva", "M8A7",
  "Kuda", "VMP", "Weevil", "Vesper", "Pharo", "Razorback",
  "BRM", "Dingo", "Gorgon", "48 Dredge",
  "KRM-262", "205 Brecci", "Haymaker 12", "Argus",
  "Drakon", "Locus", "SVG-100", "P-06"
];

const dlcPrimary = [
  "FFAR", "MX Garand", "Peacekeeper MK2", "FAMAS",
  "HG 40", "HLX 4", "DIY 11 Renovator", "RPK", "Stoner 63",
  "Banshii", "RSA Interdiction", "DBSR-50", "Dragoon",
  "Nail Gun", "Rift E9", "R70 Ajax", "XMC"
];

const standardSecondary = ["RK5", "L-CAR 9", "XM-53", "Combat Knife"];
const dlcSecondary = ["Marshal 16", "Rift E9", "ShadowClaw", "Ballistic Knife"];

const perks1 = ["Flak Jacket", "Sixth Sense", "Afterburner", "Ghost", "Blind Eye"];
const perks2 = ["Fast Hands", "Tracker", "Hard Wired", "Scavenger", "Ante Up"];
const perks3 = ["Gung-Ho", "Awareness", "Blast Suppressor", "Engineer", "Tactical Mask"];
const lethals = ["Frag", "Semtex", "Trip Mine", "Thermite", "C4"];
const tacticals = ["Concussion", "Flashbang", "Shock Charge", "EMP", "Smoke Screen"];
const wildcards = ["Overkill", "Primary Gunfighter", "Perk 1 Greed", "None"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateClass() {
  const includeDLC = document.getElementById('includeDLC').checked;
  const primaryPool = includeDLC ? [...standardPrimary, ...dlcPrimary] : [...standardPrimary];
  const secondaryPool = includeDLC ? [...standardSecondary, ...dlcSecondary] : [...standardSecondary];
  const wildcard = getRandom(wildcards);

  const klass = {
    "Primärwaffe": getRandom(primaryPool),
    "Perk 1": getRandom(perks1),
    "Perk 2": getRandom(perks2),
    "Perk 3": getRandom(perks3),
    "Lethal": getRandom(lethals),
    "Tactical": getRandom(tacticals),
    "Wildcard": wildcard
  };

  if (wildcard === "Overkill") {
    klass["Zweitwaffe (Primär)"] = getRandom(primaryPool);
  } else {
    klass["Sekundärwaffe"] = getRandom(secondaryPool);
  }

  const outputDiv = document.getElementById("classOutput");
  outputDiv.innerHTML = "<h2>Deine Klasse:</h2><ul>" +
    Object.entries(klass).map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`).join("") +
    "</ul>";
}