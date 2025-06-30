
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
  const primaryWeapons = ['KN-44', 'ICR-1', 'HVK-30'];
  const secondaries = ['RK5', 'MR6'];
  const attachments = ['Reflex', 'Griff', 'Schaft', 'Schnellziehen', 'Schalldämpfer'];
  const perks = ['Geist', 'Flinke Hände', 'Totenstille', 'Plünderer', 'Techniker'];
  const wildcards = ['Primärschütze 1', 'Perk 3 Greifer', 'Taktikbonus'];
  const lethals = ['Granate', 'Splittergranate', 'Thermit'];
  const tacticals = ['Blendgranate', 'EMP', 'Schockladung'];
  const specialists = ['Prophet – Glitch', 'Seraph – Annihilator', 'Battery – Kriegsmaschine'];

  const chosenPrimary = pickRandom(primaryWeapons);
  const chosenSecondary = pickRandom(secondaries);
  const chosenPrimaryAttachments = pickMultiple(attachments, 2);
  const chosenSecondaryAttachments = pickMultiple(attachments, 1);
  const chosenPerks = pickMultiple(perks, 3);
  const chosenWildcards = pickMultiple(wildcards, 2);
  const chosenLethal = pickRandom(lethals);
  const chosenTactical = pickRandom(tacticals);
  const chosenSpecialist = pickRandom(specialists);

  const slots = document.querySelectorAll('.slot-desc');
  const values = [
    chosenPrimary, 'Reflex', ...chosenPrimaryAttachments,
    chosenSecondary, '', ...chosenSecondaryAttachments,
    ...chosenPerks, '', '', '', '', '',
    chosenLethal, '', chosenTactical, '',
    ...chosenWildcards,
    chosenSpecialist
  ];
  slots.forEach((el, i) => {
    el.innerText = values[i] || '';
  });

  document.querySelector('.footer').innerText = "Auswahlpunkte: 10 / 10";
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.random-button');
  if (button) {
    button.addEventListener('click', generateClass);
  }
});
