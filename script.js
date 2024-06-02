//why is underscore not being ignored?
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result-container");
const resultStatement = document.getElementById("result-statement");
let isError = false;

const scrubTextInput = () => {
  const regex = /[\W+\s+_+]/g;

  const cleanedTextInput = textInput.value.replace(regex, '').toLowerCase();

  return cleanedTextInput;
};

const isPalindrome = () => {
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
  return resultStatement.innerText;
};

checkButton.addEventListener("click", isPalindrome);
