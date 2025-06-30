
document.querySelector('.random-button').addEventListener('click', () => {
  const examples = [
    "ICR-1", "Man-O-War", "Reflexvisier", "Schaft", "Schnellziehen",
    "Geist", "Plünderer", "Splittergranate", "EMP", "Prophet – Glitch"
  ];
  const slots = document.querySelectorAll('.slot-desc');
  let used = new Set();

  slots.forEach(slot => {
    let choice;
    do {
      choice = examples[Math.floor(Math.random() * examples.length)];
    } while (used.has(choice) && used.size < examples.length);
    used.add(choice);
    slot.textContent = choice;
  });

  document.querySelector('.footer').textContent = "Auswahlpunkte: 10 / 10";
});
