
let includeDLC = false;
let points = 0;
const maxPoints = 10;

const primaries = [
  { name: "KN-44", attachments: ["Reflex Sight","Suppressor","Quickdraw","Grip"], dlc: false },
  { name: "M8A7", attachments: ["ELO Sight","Suppressor","Grip"], dlc: true }
];
const secondaries = [
  { name: "RK5", attachments: ["Red Dot Sight","Suppressor"], dlc: false },
  { name: "XM-53", attachments: [], dlc: true }
];
const perks = {
  p1: ["Ghost","Flak Jacket","Blind Eye"],
  p2: ["Gung-Ho","Fast Hands","Cold Blooded"],
  p3: ["Quick Fix","Dead Silence","Awareness"]
};
const lethals = ["Frag Grenade","Semtex"];
const tacticals = ["Concussion","Flashbang"];
const wildcards = [
  { name: "Primary Gunfighter", type: "PG" },
  { name: "Overkill", type: "OK" },
  { name: "Perk 1 Greed", type: "P1G" },
  { name: "Perk 2 Greed", type: "P2G" },
  { name: "Perk 3 Greed", type: "P3G" }
];

function rnd(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}
function pickWeapon(list){
  const arr = includeDLC ? list : list.filter(w=>!w.dlc);
  return rnd(arr);
}

function generateClass() {
  points = 0;
  const data = [];

  // Primärwaffe
  const pw = pickWeapon(primaries);
  data.push(pw.name); points++;
  const vis = rnd(pw.attachments); data.push(vis); points++;
  const att1 = rnd(pw.attachments); data.push(att1); points++;
  const att2 = rnd(pw.attachments); data.push(att2); points++;
  data.push(""); data.push(""); // Aufsatz 3/4 leer

  // Sekundärwaffe
  const sw = pickWeapon(secondaries);
  data.push(sw.name); points++;
  data.push(sw.attachments[0] || ""); points++;
  data.push(""); data.push(""); // Aufsatz 1/2 leer

  // Perks
  data.push(rnd(perks.p1)); points++;
  data.push(""); // Perk 1 Zweit
  data.push(rnd(perks.p2)); points++;
  data.push(""); // Perk 2 Zweit
  data.push(rnd(perks.p3)); points++;
  data.push(""); // Perk 3 Zweit

  // Ausrüstung
  data.push(rnd(lethals)); points++;
  data.push(""); // Tödlich 2
  data.push(rnd(tacticals)); points++;
  data.push(""); // Taktisch 2

  // Wildcards
  data.push(rnd(wildcards).name); points++;
  data.push(""); data.push(""); // Wildcard 2/3

  // Spezialist
  data.push("Prophet – Glitch");

  // Total 42 Felder befüllen
  while (data.length < 42) data.push("");

  // Slots befüllen
  const descs = document.querySelectorAll(".slot-desc");
  descs.forEach((el, i) => {
    el.textContent = data[i] || "";
  });

  // Punktestand aktualisieren
  document.querySelector(".footer").textContent = `Auswahlpunkte: ${points} / ${maxPoints}`;
}

// DLC-Schalter
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dlc-switch").addEventListener("change", e => {
    includeDLC = e.target.checked;
  });

  document.querySelector(".random-button").addEventListener("click", generateClass);
});
