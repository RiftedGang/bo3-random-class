
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateClass() {
  const useDLC = document.getElementById("includeDLC").checked;

  const primaryWeapons = ['KN-44', 'ICR-1', 'HVK-30'];
  const dlcPrimaries = ['Peacekeeper MK2', 'FFAR'];

  const secondaries = ['RK5', 'MR6'];
  const dlcSecondaries = ['Marshal 16'];

  const perks = ['Geist', 'Flinke Hände', 'Totenstille'];
  const wildcards = ['Primärschütze 1', 'Perk 3 Greifer'];
  const lethals = ['Granate', 'Splittergranate'];
  const tacticals = ['Blendgranate', 'EMP'];
  const specialists = ['Prophet – Glitch', 'Seraph – Annihilator'];

  let primary = primaryWeapons;
  let secondary = secondaries;

  if (useDLC) {
    primary = primary.concat(dlcPrimaries);
    secondary = secondary.concat(dlcSecondaries);
  }

  document.getElementById("primaryWeapon").innerText = "Primär: " + pickRandom(primary);
  document.getElementById("primaryAttachments").innerText = "Aufsätze: Reflex, Griff";
  document.getElementById("secondaryWeapon").innerText = "Sekundär: " + pickRandom(secondary);
  document.getElementById("secondaryAttachments").innerText = "Aufsatz: Schalldämpfer";
  document.getElementById("perks").innerText = "Perks: " + pickRandom(perks);
  document.getElementById("wildcards").innerText = "Wildcard: " + pickRandom(wildcards);
  document.getElementById("lethal").innerText = "Tödlich: " + pickRandom(lethals);
  document.getElementById("tactical").innerText = "Taktisch: " + pickRandom(tacticals);
  document.getElementById("specialist").innerText = "Specialist: " + pickRandom(specialists);
  document.getElementById("pointCounter").innerText = "Auswahlpunkte: 10 / 10";
}
