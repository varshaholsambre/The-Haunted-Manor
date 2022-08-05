const soundUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d2/Loyalty_Freak_Music_-_07_-_A_really_dark_alley.ogg";


const audio = new Audio(soundUrl);
audio.loop = true;
audio.play()
audio.volume = 0.75

const retryButton =  document.querySelector("#retryButton");
const output = document.querySelector("#output");


let retry = prompt("You got too many incorrect answers and upset the ghost. You are now trapped in a room. Should the ghost give you a second chance? Please answer either Yes or No.");
switch(retry) {
  case "Yes":
    output.innerHTML = "Don't mess up this time.";
    retryButton.classList.remove("is-hidden");
    break;
  case "No":
    output.innerHTML = "We have no patience for cowards. Goodbye. You are stuck forever.";
    break;
    case "yes":
    output.innerHTML = "Don't mess up this time.";
    retryButton.classList.remove("is-hidden");
    break;
  case "no":
    output.innerHTML = "We have no patience for cowards. Goodbye. You are stuck forever.";
    break;
    case "Yes.":
    output.innerHTML = "Don't mess up this time.";
    retryButton.classList.remove("is-hidden");
    break;
  case "No.":
    output.innerHTML = "We have no patience for cowards. Goodbye. You are stuck forever.";
    break;
    case "yes.":
    output.innerHTML = "Don't mess up this time.";
    retryButton.classList.remove("is-hidden");
    break;
  case "no.":
    output.innerHTML = "We have no patience for cowards. Goodbye. You are stuck forever.";
    break;
  default:
    output.innerHTML = "Invalid response. Refresh and try again.";
}
