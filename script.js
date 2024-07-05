const restingStar = document.getElementById("resting-div");
const playingStar = document.getElementById("playing-div");
const pausedStar = document.getElementById("paused-div");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const resultContainer = document.getElementById("result-container");
const resultStatement = document.getElementById("result-statement");
const clearButton = document.getElementById("clear-button");

let audio = new Audio("https://audio.jukehost.co.uk/7LnReNCoXGNs1qfSiT0ezKcjIBivFhvd");

const beginMusic = () => {
  restingStar.classList.add("hide");
  playingStar.classList.remove("hide");
  
  audio.play();
};

const pauseMusic = () => {
  playingStar.classList.add("hide");
  pausedStar.classList.remove("hide");
  
  audio.pause();
};

const playMusic = () => {
  pausedStar.classList.add("hide");
  playingStar.classList.remove("hide"); 
  
  audio.play();
};

const musicEnded = () => {
  playingStar.classList.add("hide");
  restingStar.classList.remove("hide");
};

restingStar.addEventListener("click", beginMusic);

playingStar.addEventListener("click", pauseMusic);

pausedStar.addEventListener("click", playMusic);

audio.addEventListener("ended", musicEnded);

const scrubTextInput = () => {
  const regex = /[\W+\s+_+]/g;

  const cleanedTextInput = textInput.value.replace(regex, '').toLowerCase();

  return cleanedTextInput;
};

const isPalindrome = () => {
  
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  };
  
  const cleanedText = scrubTextInput();
  const splitText = cleanedText.split("");
  
  resultStatement.innerHTML = `${textInput.value} <span class="success">is</span> a palindrome`;
  
  for (let character = 0; character < splitText.length; character++) {
    
    if (splitText[character] !== splitText[splitText.length - 1 - character]) {
      
      resultStatement.innerHTML = `${textInput.value} <span class="failure">is not</span> a palindrome`
      break;
    }
  };
  resultContainer.classList.remove("hide");
  return resultStatement.innerHTML;
};

const clearResult = () => {
  resultContainer.classList.add("hide");
  textInput.value = "";
}

checkButton.addEventListener("click", isPalindrome);

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    isPalindrome();
  }
});

clearButton.addEventListener("click", clearResult);
