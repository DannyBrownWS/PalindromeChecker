const textInput = "% TexT";//document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result-container");
const resultStatement = document.getElementById("result-statement");
let isError = false;

const scrubTextInput = () => {
  const regex = /[\W+\s+]/g;

  const cleanedTextInput = textInput.replace(regex, '').toLowerCase();

  return cleanedTextInput;
};

const isPalindrome = () => {
  scrubTextInput();
  
  const cleanedText = scrubTextInput();
  const splitText = cleanedText.split("");
  
  resultStatement.innerText = `${textInput} is a palindrome`;
  
  for (let character = 0; character < splitText.length; character++) {
    
    if (splitText[character] !== splitText[splitText.length - 1 - character]) {
      
      resultStatement.innerText = `${textInput} is not a palindrome`
      break;
    }
  };
  resultContainer.classList.remove("hide");
  return resultStatement.innerText;
};

checkButton.addEventListener("click", isPalindrome);
