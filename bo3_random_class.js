
function generateRandomClass() {
  const slots = {
    primary: ['KN-44', 'ICR-1', 'HVK-30'],
    secondary: ['RK5', 'L-CAR 9', 'MR6'],
    perks: ['Flinke Hände', 'Geist', 'Totenstille'],
    equipment: ['Granate', 'EMP', 'Blendgranate'],
    wildcards: ['Primärschütze 1', 'Perk 3 Greifer'],
    specialist: ['Prophet – Glitch', 'Battery – War Machine']
  };

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  document.getElementById('primary-weapon').innerText = pick(slots.primary);
  document.getElementById('secondary-weapon').innerText = pick(slots.secondary);
  document.getElementById('perks').innerText = pick(slots.perks);
  document.getElementById('equipment').innerText = pick(slots.equipment);
  document.getElementById('wildcards').innerText = pick(slots.wildcards);
  document.getElementById('specialist').innerText = pick(slots.specialist);

  document.getElementById('point-counter').innerText = "Auswahlpunkte: 10 / 10";
}
