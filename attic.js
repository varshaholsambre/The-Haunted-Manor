const skeleton = document.querySelector("#skeleton");
const necklace = document.querySelector("#necklace");
const clock = document.querySelector("#clock");
const bat = document.querySelector("#bat");
const doll = document.querySelector("#doll");

let skeletonObj = {
  object: skeleton,
  clue: "A universal symbol of a death, it is on me that your skin rests.",
};
let necklaceObj = {
  object: necklace,
  clue: "A fine piece of jewelry I am, a thief would love to have me in their hands.",
};
let clockObj = {
  object: clock,
  clue: "The perfect one to tell time, just don’t be alarmed when you hear my chime.",
};
let batObj = {
  object: bat,
  clue: "I sleep by day and fly by night, but I lack feathers to aid my flight.",
};
let dollObj = {
  object: doll,
  clue: "Though I can be made a boy, I am often times a young girl’s favorite toy."
};

const atticArr = [skeletonObj, necklaceObj, clockObj, batObj, dollObj];

const clueAttic = document.querySelector("#clueAttic");

const winButton = document.querySelector("#win");

/* winButton.addEventListener('click', (e) => {
window.location.href = "exit.html"
const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/8/88/Loyalty_Freak_Music_-_03_-_Love_song_by_a_ghost_duet.ogg";
const audio = new Audio(soundUrl);
audio.loop = true;
audio.play()
audio.volume = 0.95
});
*/

const begin3 = document.querySelector("#begin3");

let shuffledArray = atticArr.sort((a, b) => 0.5 - Math.random());
let target = shuffledArray[0].object;

begin3.addEventListener('click' , (e) => {
  clueAttic.innerHTML = shuffledArray[0].clue;
  ghost3.classList.add("is-hidden");
});

let incorrectclicks = 0;

for (let i = 0 ; i < shuffledArray.length; i++) {
   shuffledArray[i].object.addEventListener('click' , (e) =>{
        if(shuffledArray[i].object === target){
          if(i === (shuffledArray.length - 1))
          {
             const finishedSound = "https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_chimes.ogg";
            const audio = new Audio(finishedSound);
            audio.play()
            audio.volume = 0.1
            clueAttic.innerHTML = "Hmmph. I didn't expect you to actually finish. Pity. But, a promise is a promise. You are free to leave mortal. ";
            ghost3.classList.remove("is-hidden");
            shuffledArray[i].object.classList.add("is-hidden");
            winButton.classList.remove("is-hidden");
          }
          else{
            const correctSound = "https://upload.wikimedia.org/wikipedia/commons/5/56/Game-sound-correct.wav";
            const audio2 = new Audio(correctSound);
            audio2.play()
            audio2.volume = 0.1
          clueAttic.innerHTML = shuffledArray[i+1].clue;
          shuffledArray[i].object.classList.add("is-hidden");
          target = shuffledArray[i+1].object;
          }
       }
     else {
       incorrectclicks = incorrectclicks + 1
       const incorrectSound = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lemur_catta--shriek_var1_1.ogg";
            const audio3 = new Audio(incorrectSound);
            audio3.play()
            audio3.volume = 0.1
        if (incorrectclicks === 4) {
          window.location.href = "booted.html";
       }
     }
    });
}