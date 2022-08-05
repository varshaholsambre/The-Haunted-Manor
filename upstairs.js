const book = document.querySelector("#book");
const vial = document.querySelector("#vial");
const bear = document.querySelector("#bear");
const brush = document.querySelector("#brush");
const ball = document.querySelector("#ball");

let bookObj = {
  object: book,
  clue: "Though we have covers we are not beds; we are not meant to be slept in, but read.",
};
let vialObj = {
  object: vial,
  clue: "The giver of life, you’ll find me inside of a vial. It is I that your heart pumps for awhile.",
};
let bearObj = {
  object: bear,
  clue: "My kind love honey, but unlike them I am much more fluffy.",
};
let brushObj = {
  object: brush,
  clue: "It is I that makes your hair smooth, using me your tangles get loose.",
};
let ballObj = {
  object: ball,
  clue: "Gaze inside to see what your fortune might tell, but be careful with me–I’d shatter if I fell."
};

const upstairsArr = [bookObj, vialObj, bearObj, brushObj, ballObj];

const clueUpstairs = document.querySelector("#clueUpstairs");

const begin2 = document.querySelector("#begin2");

let shuffledArray = upstairsArr.sort((a, b) => 0.5 - Math.random());
let target = shuffledArray[0].object;

begin2.addEventListener('click' , (e) =>{
  clueUpstairs.innerHTML = shuffledArray[0].clue;
  ghost2.classList.add("is-hidden");
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
            clueUpstairs.innerHTML = "Congrats, you may move on.";
            shuffledArray[i].object.classList.add("is-hidden");
            atticButton.classList.remove("is-hidden");
          }
          else{
            const correctSound = "https://upload.wikimedia.org/wikipedia/commons/5/56/Game-sound-correct.wav";
            const audio2 = new Audio(correctSound);
            audio2.play()
            audio2.volume = 0.1
          clueUpstairs.innerHTML = shuffledArray[i+1].clue;
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