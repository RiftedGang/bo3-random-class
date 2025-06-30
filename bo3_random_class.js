
document.addEventListener('DOMContentLoaded', () => {
  const primWaffen = ["KN-44", "ICR-1", "M8A7", "HVK-30", "Man-O-War", "Sheiva"];
  const sekWaffen = ["RK5", "MR6", "L-CAR 9", "Marshall 16"];
  const visiere = ["Reflex", "BOA 3", "ELO", "Thermal"];
  const aufsätze = ["Schnellziehen", "Griff", "Schaft", "Schalldämpfer", "Schnelles Mag.", "Langer Lauf"];
  const perks1 = ["Nachbrenner", "Geist", "Blinde Überwachung"];
  const perks2 = ["Flinke Hände", "Plünderer", "Aufgespürt"];
  const perks3 = ["Totenstille", "Techniker", "Gung-Ho"];
  const lethal = ["Splittergranate", "Semtex", "Tomahawk"];
  const tactical = ["Blendgranate", "EMP", "Schockladung"];
  const wildcards = ["Primärschütze", "Sekundärschütze", "Perk 1 Greifer", "Perk 2 Greifer", "Perk 3 Greifer"];
  const specialists = ["Prophet – Glitch", "Seraph – Annihilator", "Battery – War Machine", "Outrider – Sparrow"];

  const pickFields = () => {
    let points = 0;

    const pick = (list, max = 1) => {
      const count = Math.floor(Math.random() * max) + 1;
      const shuffled = list.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    // Primärwaffe
    const prim = pick(primWaffen)[0];
    document.querySelectorAll(".section")[0].querySelector(".slot-desc").textContent = prim;
    points++;

    const primVis = pick(visiere)[0];
    document.querySelectorAll(".section")[0].querySelectorAll(".slot-desc")[1].textContent = primVis;
    points++;

    const primAtts = pick(aufsätze, 4);
    primAtts.forEach((a, i) => {
      document.querySelectorAll(".section")[0].querySelectorAll(".slot-desc")[i + 2].textContent = a;
    });
    points += primAtts.length;

    // Sekundärwaffe
    const sek = pick(sekWaffen)[0];
    document.querySelectorAll(".section")[1].querySelector(".slot-desc").textContent = sek;
    points++;

    const sekVis = pick(visiere)[0];
    document.querySelectorAll(".section")[1].querySelectorAll(".slot-desc")[1].textContent = sekVis;
    points++;

    const sekAtts = pick(aufsätze, 2);
    sekAtts.forEach((a, i) => {
      document.querySelectorAll(".section")[1].querySelectorAll(".slot-desc")[i + 2].textContent = a;
    });
    points += sekAtts.length;

    // Perks
    const p1 = pick(perks1)[0];
    document.querySelectorAll(".section")[2].querySelectorAll(".slot-desc")[0].textContent = p1;
    points++;

    const p2 = pick(perks2)[0];
    document.querySelectorAll(".section")[2].querySelectorAll(".slot-desc")[2].textContent = p2;
    points++;

    const p3 = pick(perks3)[0];
    document.querySelectorAll(".section")[2].querySelectorAll(".slot-desc")[4].textContent = p3;
    points++;

    // Wildcards (wenn Punkte übrig)
    let wildcardIndex = 0;
    while (points < 10 && wildcardIndex < wildcards.length) {
      document.querySelectorAll(".section")[4].querySelectorAll(".slot-desc")[wildcardIndex].textContent = wildcards[wildcardIndex];
      points++;
      wildcardIndex++;
    }

    // Ausrüstung
    document.querySelectorAll(".section")[3].querySelectorAll(".slot-desc")[0].textContent = pick(lethal)[0];
    document.querySelectorAll(".section")[3].querySelectorAll(".slot-desc")[2].textContent = pick(tactical)[0];

    // Spezialist
    document.querySelectorAll(".section")[5].querySelector(".slot-desc").textContent = pick(specialists)[0];

    // Punktestand
    document.querySelector(".footer").textContent = `Auswahlpunkte: ${points} / 10`;
  };

  document.querySelector(".random-button").addEventListener("click", pickFields);
});
