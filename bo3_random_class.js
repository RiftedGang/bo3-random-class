
function generateRandomClass() {
  const primaries = ['KN-44', 'ICR-1', 'HVK-30', 'Man-O-War'];
  const secondaries = ['RK5', 'MR6', 'L-CAR 9'];
  const perks = ['Geist', 'Flinke Hände', 'Totenstille', 'Kaltblütig'];
  const equipment = ['Granate', 'Blendgranate', 'EMP'];
  const wildcards = ['Primärschütze 1', 'Perk 3 Greifer', 'Überzeugungstäter'];
  const specialists = ['Prophet – Glitch', 'Battery – War Machine', 'Seraph – Annihilator'];

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  let points = 0;
  const get = (slotId, item, used = 1) => {
    document.getElementById(slotId).innerText = item;
    points += used;
  };

  points = 0;
  get('primary', pick(primaries));
  get('secondary', pick(secondaries));
  get('perks', pick(perks));
  get('equipment', pick(equipment));
  get('wildcards', pick(wildcards));
  get('specialist', pick(specialists));

  document.getElementById("points").innerText = "Auswahlpunkte: " + points + " / 10";
}
