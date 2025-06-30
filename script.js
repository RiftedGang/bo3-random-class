
function pickRandom(arr, used = []) {
  const filtered = arr.filter(x => !used.includes(x));
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function pickMultiple(arr, count) {
  const picked = [];
  while (picked.length < count && picked.length < arr.length) {
    const item = pickRandom(arr, picked);
    picked.push(item);
  }
  return picked;
}

function generateClass() {
  const primaryWeapons = ['KN-44', 'ICR-1', 'HVK-30', 'Man-O-War', 'M8A7', 'Sheiva'];
  const secondaryWeapons = ['RK5', 'MR6', 'Marshal 16'];
  const visiere = ['Reflex', 'BOA 3', 'Recon', 'ELO'];
  const primaryAttachments = ['Griff', 'Schaft', 'Schnellziehen', 'Schalldämpfer', 'Schnellfeuer'];
  const secondaryAttachments = ['Laser-Makierer', 'Schnellziehen', 'Schalldämpfer'];
  const perks1 = ['Nachbrenner', 'Geist', 'Übertakten'];
  const perks2 = ['Flinke Hände', 'Plünderer', 'Kaltblütig'];
  const perks3 = ['Totenstille', 'Techniker', 'Wachsamkeit'];
  const wildcards = ['Primärschütze 1', 'Perk 3 Greifer', 'Taktikbonus'];
  const lethals = ['Granate', 'Splittergranate', 'Thermit'];
  const tacticals = ['Blendgranate', 'EMP', 'Schockladung'];
  const specialists = ['Prophet – Glitch', 'Seraph – Annihilator', 'Battery – Kriegsmaschine'];

  const slotDescs = document.querySelectorAll('.slot-desc');

  // Zuweisung entsprechend der HTML-Slots (insgesamt 26)
  let values = [];

  // Primärwaffe
  const primary = pickRandom(primaryWeapons);
  const primaryVisier = pickRandom(visiere);
  const primaryAtts = pickMultiple(primaryAttachments, 4);
  values.push(primary, primaryVisier, ...primaryAtts);

  // Sekundärwaffe
  const secondary = pickRandom(secondaryWeapons);
  const secondaryVisier = pickRandom(visiere);
  const secondaryAtts = pickMultiple(secondaryAttachments, 2);
  values.push(secondary, secondaryVisier, ...secondaryAtts);

  // Perks
  const perk1 = pickRandom(perks1);
  const perk1z = pickRandom(perks1, [perk1]);
  const perk2 = pickRandom(perks2);
  const perk2z = pickRandom(perks2, [perk2]);
  const perk3 = pickRandom(perks3);
  const perk3z = pickRandom(perks3, [perk3]);
  values.push(perk1, perk1z, perk2, perk2z, perk3, perk3z);

  // Ausrüstung
  const lethal1 = pickRandom(lethals);
  const lethal2 = pickRandom(lethals, [lethal1]);
  const tactical1 = pickRandom(tacticals);
  const tactical2 = pickRandom(tacticals, [tactical1]);
  values.push(lethal1, lethal2, tactical1, tactical2);

  // Wildcards
  const wc1 = pickRandom(wildcards);
  const wc2 = pickRandom(wildcards, [wc1]);
  const wc3 = pickRandom(wildcards, [wc1, wc2]);
  values.push(wc1, wc2, wc3);

  // Specialist
  const specialist = pickRandom(specialists);
  values.push(specialist);

  // Slots einfügen
  for (let i = 0; i < slotDescs.length; i++) {
    slotDescs[i].innerText = values[i] || '';
  }

  // Auswahlpunkte anzeigen
  document.querySelector('.footer').innerText = "Auswahlpunkte: 10 / 10";
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.random-button');
  if (button) {
    button.addEventListener('click', generateClass);
    generateClass(); // Direkt initialisieren
  }
});
