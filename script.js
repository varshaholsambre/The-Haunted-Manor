const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d2/Loyalty_Freak_Music_-_07_-_A_really_dark_alley.ogg";
const audio = new Audio(soundUrl);



const homeButton =  document.querySelector("#homeButton");
const enterButton = document.querySelector("#enterButton");




if (confirm("You find yourself in front of a Haunted House on a dark Halloween Night. Do you feel brave enough to go in?")) {
 homeButton.classList.remove("is-hidden");
} else {
 alert("You may leave then. Goodbye.");
}



homeButton.addEventListener('click', (e) => {
audio.loop = true;
audio.play()
audio.volume = 0.5
  homeButton.classList.add("is-hidden");
  alert("When you touch the door knob, you begin to hear sounds that scare you. You hesitate. Consider if you are truly brave enough to enter.")
const entryButton = document.querySelector("#enterButton");
entryButton.classList.remove("is-hidden");
});

/* enterButton.addEventListener('click', (e) => {
  alert("Good luck.")
  //window.location.href = "foyer.html"
});
*/
