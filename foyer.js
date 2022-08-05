const urn = document.querySelector("#urn");
const cat = document.querySelector("#cat");
const lantern = document.querySelector("#lantern");
const scissors = document.querySelector("#scissors");
const mirror = document.querySelector("#mirror");



let urnObj = {
  object: urn,
  clue: "The place one goes when set afire, my metal cage is something to admire.",
};
let catObj = {
  object: cat,
  clue: "Don’t follow when I cross your path, if you do, you’ll face my furry wrath.",
};
let lanternObj = {
  object: lantern,
  clue: "Though unneeded on a bright day, who better than I to light your way?",
};
let scissorsObj = {
  object: scissors,
  clue: "Snip snap snip snap--I can be a helper or a deathtrap.",
};
let mirrorObj = {
  object: mirror,
  clue: "I am a reflection of one’s identity, but stare for too long you might not find serenity."
};

const foyerArr = [urnObj, catObj, lanternObj, scissorsObj, mirrorObj];

const clue = document.querySelector("#clue");

const begin = document.querySelector("#begin");

let shuffledArray = foyerArr.sort((a, b) => 0.5 - Math.random());
let target = shuffledArray[0].object;

begin.addEventListener('click', (e) => {
  clue.innerHTML = shuffledArray[0].clue;
  ghost.classList.add("is-hidden");
});

let incorrectclicks = 0

for (let i = 0 ; i < shuffledArray.length; i++) {
   shuffledArray[i].object.addEventListener('click' , (e) =>{
        if(shuffledArray[i].object === target){
          if(i === (shuffledArray.length - 1))
          {
         const finishedSound = "https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_chimes.ogg";
            const audio = new Audio(finishedSound);
            audio.play()
            audio.volume = 0.1
            clue.innerHTML = "Congrats, you may move on.";
            shuffledArray[i].object.classList.add("is-hidden");
            upstairsButton.classList.remove("is-hidden");
          }
          else{
            const correctSound = "https://upload.wikimedia.org/wikipedia/commons/5/56/Game-sound-correct.wav";
            const audio2 = new Audio(correctSound);
            audio2.play()
            audio2.volume = 0.1
          clue.innerHTML = shuffledArray[i+1].clue;
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