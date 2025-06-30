
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomClass() {
  const slots = [
    'primary-weapon','primary-sight','primary-attachment1','primary-attachment2','primary-attachment3',
    'secondary-weapon','secondary-sight','secondary-attachment1','secondary-attachment2',
    'perk1','perk1b','perk2','perk2b','perk3','perk3b',
    'lethal1','lethal2','tactical1','tactical2',
    'wildcard1','wildcard2','wildcard3','specialist'
  ];

  const exampleOptions = ['KN-44', 'ICR-1', 'Reflex', 'Schnellziehen', 'Flinke Hände', 'Granate', 'Totenstille', 'Geist', 'Prophet'];

  let points = 0;

  slots.forEach(slot => {
    const pick = pickRandom(exampleOptions);
    document.getElementById(slot).innerText = pick;
    points++;
  });

  document.getElementById("point-counter").innerText = "Auswahlpunkte: " + (points > 10 ? 10 : points) + " / 10";
}
