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
  { name: "Primary Gunfighter", type: "PG", effectSlots: { extraAttachments: 1 } },
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dlc-switch").addEventListener("change", e=>{
    includeDLC = e.target.checked;
  });

  document.querySelector(".random-button").addEventListener("click", ()=>{
    points = 0;
    const w = pickWeapon(primaries);
    const s = pickWeapon(secondaries);
    points += 2; // primary and secondary

    const perksPick = [rnd(perks.p1), rnd(perks.p2), rnd(perks.p3)];
    points += 3;

    const lethal = rnd(lethals);
    const tactical = rnd(tacticals);
    points += 2;

    const wild = rnd(wildcards);
    points += 1;

    document.querySelector(".footer").textContent = \`Auswahlpunkte: \${points} / \${maxPoints}\`;
    alert(\`Primär: \${w.name}\nSekundär: \${s.name}\nPerks: \${perksPick.join(", ")}\nLethal: \${lethal}\nTactical: \${tactical}\nWildcard: \${wild.name}\`);
  });
});
