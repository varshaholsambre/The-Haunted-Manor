const upstairsButton = document.querySelector("#upstairsButton");
const foyerButton = document.querySelector("#backtofoyerButton");
const atticButton = document.querySelector("#atticButton");
const upstairsButton2 = document.querySelector("#backtoupstairsButton");
const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Loyalty_Freak_Music_-_01_-_Monster_Parade.ogg";
  //(new Audio(soundUrl)).play();

const audio = new Audio(soundUrl);
audio.loop = true;
audio.play()
audio.volume = 0.1;
  


/*upstairsButton.addEventListener('click', (e) => {
alert("You are going upstairs.")
  const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bf/27alligator2bellow.ogg";
  (new Audio(soundUrl)).play();
});

upstairsButton2.addEventListener('click', (e) => {
alert("You are going downstairs.")
});

foyerButton.addEventListener('click', (e) => {
alert("You are going to the foyer.")
});

atticButton.addEventListener('click', (e) => {
alert("You are going to the attic.")
  const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bf/27alligator2bellow.ogg";
  (new Audio(soundUrl)).play();
});
*/