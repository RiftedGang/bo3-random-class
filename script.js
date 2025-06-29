
const waffen = {
  "MP": {
    visiere: ["Reflex", "Aufklärung", "Varix 3", "BOA 3", "LV"],
    aufsätze: ["Schnell ziehen", "Schalldämpfer", "Griff", "Schaft", "Laser-Markierer",
               "Vollmantelgeschoss", "Schnelles Magazin", "Langer Lauf", "Magazinerweiterung", "Schnellfeuer"]
  },
  "Sturmgewehr": {
    visiere: ["Reflex", "Aufklärung", "Varix 3", "BOA 3", "Thermal", "LV"],
    aufsätze: ["Schnell ziehen", "Griff", "Schalldämpfer", "Großkaliber", "Schaft", "Laser-Markierer",
               "Vollmantelgeschoss", "Schnelles Magazin", "Magazinerweiterung", "Langer Lauf", "Schnellfeuer"]
  },
  "Schrotflinte": {
    visiere: ["Reflex", "BOA 3", "LV"],
    aufsätze: ["Schnell ziehen", "Schalldämpfer", "Schaft", "Laser-Markierer",
               "Schnelles Magazin", "Magazinerweiterung", "Langer Lauf", "Schnellfeuer"]
  },
  "LMG": {
    visiere: ["Reflex", "Aufklärung", "Varix 3", "BOA 3", "Thermal", "LV"],
    aufsätze: ["Schnell ziehen", "Griff", "Schalldämpfer", "Schaft", "Laser-Markierer",
               "Vollmantelgeschoss", "Schnelles Magazin", "Magazinerweiterung", "Schnellfeuer"]
  },
  "Scharfschütze": {
    visiere: ["Aufklärung", "Varix 3", "Thermal", "LV"],
    aufsätze: ["Schalldämpfer", "Ballistik-Prozessor", "Schnelles Magazin", "Vollmantelgeschoss",
               "Magazinerweiterung", "Schnellfeuer", "Schaft"]
  },
  "Pistole": {
    visiere: ["Reflex", "LV"],
    aufsätze: ["Schnell ziehen", "Schalldämpfer", "Laser-Markierer", "Großkaliber",
               "Vollmantelgeschoss", "Schnelles Magazin", "Magazinerweiterung", "Langer Lauf", "Zweihändig"]
  }
};

const extras = {
  "Extra 1": ["Nachbrenner", "Blinde Überwachung", "Sechster Sinn", "Kugelsichere Weste", "Übertakten", "Geist"],
  "Extra 2": ["Flinke Hände", "Anzahlung", "Fest verdrahtet", "Aufgespürt", "Kaltblütig", "Plünderer"],
  "Extra 3": ["Gung-Ho", "Strahldämpfer", "Wachsamkeit", "Taktikmaske", "Techniker", "Totenstille"]
};

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function generateClass() {
  let punkte = 0;
  let waffenTypen = Object.keys(waffen);
  let waffenwahl, visier, aufsaetze = [];

  do {
    waffenwahl = waffenTypen[Math.floor(Math.random() * waffenTypen.length)];
    visier = shuffle(waffen[waffenwahl].visiere)[0];
    aufsaetze = shuffle(waffen[waffenwahl].aufsätze).slice(0, 3);
    punkte = 1 + 1 + aufsaetze.length; // 1 für Waffe, 1 für Visier, Rest für Aufsätze
  } while (punkte > 10);

  let extrasAuswahl = [];
  for (let key in extras) {
    if (punkte < 10) {
      let pick = shuffle(extras[key])[0];
      extrasAuswahl.push(`${key}: ${pick}`);
      punkte++;
    }
  }

  document.getElementById("waffe").textContent = `${waffenwahl}`;
  document.getElementById("visier").textContent = visier;
  document.getElementById("aufsaetze").innerHTML = aufsaetze.map(e => `<li>${e}</li>`).join('');
  document.getElementById("extras").innerHTML = extrasAuswahl.map(e => `<li>${e}</li>`).join('');
  document.getElementById("punkteAnzeige").textContent = `Punkte: ${punkte}/10`;
}
