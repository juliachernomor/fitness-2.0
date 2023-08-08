let introText = document.querySelector('#city');
// For stable style sheet work, don't write messages longer than 14 characters
let phrases = ['Мoсква', 'Рязань', 'Владимир', 'Новосибирск', 'Тверь', 'Санкт-Петербург',
  'Пермь'];

//* INTRO TEXT
let idx = 0;
let char = 0;
let currentText = [];
let deleting = false;
let isEnd = false;

export default function typeText() {
  isEnd = false;

  if (idx < phrases.length) {
    if (!deleting && char <= phrases[idx].length) {
      currentText.push(phrases[idx][char]);
      char++;
      introText.innerHTML = currentText.join('');
    }
    if (deleting && char <= phrases[idx].length) {
      currentText.pop(phrases[idx][char]);
      char--;
      introText.innerHTML = currentText.join('');
    }
    if (char === phrases[idx].length) {
      isEnd = true;
      deleting = true;
    }
    if (deleting && char === 0) {
      currentText = [];
      deleting = false;
      idx++;
      if (idx === phrases.length) {
        idx = 0;
      }
    }
  }
  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time1 = deleting ? speedUp : normalSpeed;
  const time = isEnd ? 2000 : time1;
  setTimeout(typeText, time);
}
setTimeout(typeText, 3000);

