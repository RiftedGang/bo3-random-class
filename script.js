// JavaScript: Zufälliger Klassen-Generator für CoD: Black Ops 3

const generateButton = document.querySelector(".random-button");
const slotDescs = document.querySelectorAll(".slot-desc");
const footer = document.querySelector(".footer");
const specialistEl = document.querySelector(".specialist");

const primaries = ["KN-44", "Man-O-War", "HVK-30", "ICR-1", "M8A7", "XR-2", "Sheiva", "BRM", "Dingo", "Gorgon", "48 Dredge", "VMP", "Vesper", "Weevil", "Kuda", "Razorback", "Haymaker 12", "Brecci", "Argus"];
const secondaries = ["MR6", "RK5", "L-CAR 9", "XM-53", "Butterfly Knife", "Brass Knuckles", "Wrench"];
const sights = ["Reflex", "ELO", "BOA 3", "Thermal", "Varek 3", "Zielfernrohr", "IR-Sicht"];
const attachments = ["Schnellziehen", "Griff", "Langer Lauf", "Schaft", "Laser", "Schalldämpfer", "Vollmantelgeschoss (FMJ)", "Magazin-Erweiterung", "Schnellfeuer", "Großkaliber"];
const perk1 = ["Sechster Sinn", "Nachbrenner", "Flinkheit", "Ghost", "Kugelsichere Weste", "Blinde Überwachung"];
const perk2 = ["Hardwired", "Aufgespürt", "Kaltblütig", "Plünderer", "Flinke Hände", "Anzahlung", "Fest verdrahtet"];
const perk3 = ["Totenstille", "Gung-Ho", "Wachsamkeit", "Techniker", "Strahldämpfer", "Taktikmaske"];
const lethal = ["Semtex", "Splittergranate", "C4", "Thermit", "Kampfaxt"];
const tactical = ["EMP", "Rauchgranate", "Blendgranate", "Schockladung"];
const wildcards = ["Primärwaffe 1", "Primärwaffe 2", "Sekundärwaffe 1", "Perk 1-2", "Perk 2-2", "Perk 3-2", "Taktik 1", "Gefährlich"];
const specialists = ["Prophet – Glitch", "Prophet – Tempest", "Seraph – Annihilator", "Battery – War Machine", "Outrider – Vision Pulse", "Outrider – Sparrow", "Nomad – Rejack", "Reaper – Scythe", "Firebreak – Purifier", "Spectre – Ripper", "Ruin – Overdrive", "Ruin – Gravity Spikes"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getUnique(arr, exclude) {
  const filtered = arr.filter(item => !exclude.includes(item));
  return filtered.length ? random(filtered) : null;
}

function fillSlots(contentArray) {
  slotDescs.forEach((desc, i) => {
    desc.textContent = contentArray[i] || "";
  });
}

function generateClass() {
  let points = 0;
  let slots = [];
  let usedAttachments = [];
  let usedWildcards = [];
  let perkList = [];

  const primary = random(primaries);
  const primarySight = random(sights);
  const primaryAttachment = random(attachments);
  slots.push(primary, primarySight, primaryAttachment);
  usedAttachments.push(primaryAttachment);
  points += 3;

  if (Math.random() > 0.5 && points + 2 <= 10) {
    const att2 = getUnique(attachments, usedAttachments);
    const att3 = getUnique(attachments, [...usedAttachments, att2]);
    if (att2 && att3) {
      slots.push(att2, att3);
      usedAttachments.push(att2, att3);
      usedWildcards.push("Primärwaffe 1");
      points += 2;
    } else {
      slots.push("", "");
    }
  } else {
    slots.push("", "");
  }

  const secondary = random(secondaries);
  slots.push(secondary);
  points++;

  if (Math.random() > 0.5 && points + 2 <= 10) {
    const att2 = getUnique(attachments, usedAttachments);
    const att3 = getUnique(attachments, [...usedAttachments, att2]);
    slots.push("", att2 || "", att3 || "");
    usedAttachments.push(att2, att3);
    usedWildcards.push("Sekundärwaffe 1");
    points += 2;
  } else {
    slots.push("", "", "");
  }

  const p1 = random(perk1);
  const p2 = random(perk2);
  const p3 = random(perk3);
  perkList.push(p1, "", p2, "", p3, "");
  points += 3;

  if (Math.random() > 0.7 && points + 1 <= 10) {
    const extra = getUnique(perk1, [p1]);
    perkList[1] = extra;
    usedWildcards.push("Perk 1-2");
    points++;
  }
  if (Math.random() > 0.7 && points + 1 <= 10) {
    const extra = getUnique(perk2, [p2]);
    perkList[3] = extra;
    usedWildcards.push("Perk 2-2");
    points++;
  }
  if (Math.random() > 0.7 && points + 1 <= 10) {
    const extra = getUnique(perk3, [p3]);
    perkList[5] = extra;
    usedWildcards.push("Perk 3-2");
    points++;
  }
  slots.push(...perkList);

  const lethal1 = random(lethal);
  const tactical1 = random(tactical);
  slots.push(lethal1, "", tactical1, "");
  points += 2;

  if (Math.random() > 0.7 && points + 1 <= 10) {
    slots[slots.length - 3] = random(lethal.filter(l => l !== lethal1));
    usedWildcards.push("Gefährlich");
    points++;
  }
  if (Math.random() > 0.7 && points + 1 <= 10) {
    slots[slots.length - 1] = random(tactical.filter(t => t !== tactical1));
    usedWildcards.push("Taktik 1");
    points++;
  }

  slots.push(usedWildcards[0] || "", usedWildcards[1] || "", usedWildcards[2] || "");

  const spec = random(specialists);
  specialistEl.textContent = spec;
  slots.push(spec);

  fillSlots(slots);
  footer.textContent = `Auswahlpunkte: ${points} / 10`;
}

generateButton.addEventListener("click", generateClass);