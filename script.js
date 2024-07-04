const restingStar = document.getElementById("resting-div");
const playingStar = document.getElementById("playing-div");
const pausedStar = document.getElementById("paused-div");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const resultContainer = document.getElementById("result-container");
const resultStatement = document.getElementById("result-statement");
const clearButton = document.getElementById("clear-button");

let audio = new Audio("https://dbpalindromemp3.s3.us-east-2.amazonaws.com/Serge%2520Quadrado%2520-%2520Autumn%2520Garden.mp3.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIA7iKNpXh2d5FhNArM7SD4Vyp8zfZFBaky6HO8XDe6cYAiB4gM395mA0tpT5SGa0CSu2NlyanbZTKDajUh0wXCcFMSrtAgiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM4MTQ5MTg1MjgxNyIMr24ghJ425Jzx5fn4KsECFgiAp0XW%2Bp0Mo8EohFTTCRdee5ix61Wy0hxnTy7COPJOPD4m1higiz8CAOlehEQLp5WOFCDP4GQ%2BZJPhHCAqdsU%2B78p%2FdZGD269tTgsQGRV7EWtYy55VEJHbdCmlFq73%2Ft3UAinkvbX8wP7BZ4LcpqIQARRm79Op3m%2Fs06VMkJIFpCEAKhx%2FQfDCVm9tw3vGrC%2BjoELcrQ5eF6Tj10cTeDrDdL2iJ%2FSQok0PpIqohiO1ROgzRf6hTnhY3CEcHBBtGHyPK6Qr%2FtEJG7gSfVlKQqkfZ7snlaDKTOrOy68lQJ8dofOaXj73XiJcjgrJr38ITMnPJSrAXGuqs3MDx%2BIwNMHXKFQJ%2B1hoYzsSs40br6n8XGO%2BAqilD8cuQ7F3ZNIK3rTJaXHMt7cCovMk2D9OJpcV5Vkj%2F1C%2Fh29LGWYpRjhzMNyhl7QGOrQC5MgGkLDSMezt6%2BZvvPEysRLcEAUxyOT20zR%2FimAXRuNmkf5gCNDtLljLLYx5KqP05OD1Q1yQBxu29TT2xMwUCA12J8QGQxMsQ419gx1VAhWsIZcuEoDJs0kHkFp1kOWygcZNfn3KfGUgc1%2FJVbM2P7TgAXLh2dRYcyovb82gnj2msSZqdRV3rkNc149h9E%2BZqkAz5Y2lSX%2FOU9XhKuqAYfkNtnuuQx%2Bd0VVOhPf0N7DHB6Tc0M1hsDh5%2BwXgfEXwoCxaPpgjrZ1NooC2Nl9VmGm3F7u2AdghmcRLMJrslwfVAMXFBAPSAZJ%2BXTTlaqNpjusX2YwX%2F7Z3SKCbefkenSOG1mb%2FhdK90orcCz3oUDvQlChGqqCZFbdADjD0YzFgTNpSZv0KoxmUQfB%2F%2B6mUK4g9Z8I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240704T001851Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVRUVPWYIXGREBLM5%2F20240704%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=f93f54b1a4abe8e49ae61a09cf19896fe3b6eb9f3495c75dc2e5a100998ac8a7");

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
