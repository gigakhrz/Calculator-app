const switchTheme = document.querySelector("#change");
const buttons = document.querySelectorAll("button");
const resultOutput = document.querySelector(".output");
const deleteBut = document.querySelector("#del");
const equalBut = document.querySelector("#equal");
const resetBut = document.querySelector("#reset");
const bodyTheme = document.querySelector("body");

let inputOne;
let inputTwo;
let generator;
let sum;
let maxlength = 16;

// this function will change calculator styles.
const changeTheme = () => {
  switchTheme.addEventListener("click", () => {
    switch (switchTheme.value) {
      case "1":
        bodyTheme.classList.remove("theme2");
        bodyTheme.classList.remove("theme3");
        bodyTheme.classList.add("theme1");

        break;

      case "2":
        bodyTheme.classList.remove("theme1");
        bodyTheme.classList.remove("theme3");
        bodyTheme.classList.add("theme2");

        break;

      case "3":
        bodyTheme.classList.remove("theme1");
        bodyTheme.classList.remove("theme2");
        bodyTheme.classList.add("theme3");
        break;
    }
  });
};

//function which calculated
const calculator = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      let buttonsValue = buttons[i].value;
      if ((buttonsValue >= 0 && buttonsValue <= 9) || buttonsValue === ".") {
        resultOutput.textContent += buttonsValue;
      } else if (
        buttonsValue === "+" ||
        buttonsValue === "-" ||
        buttonsValue === "/" ||
        buttonsValue === "*"
      ) {
        console.log(resultOutput.textContent);
        inputOne = Number(resultOutput.textContent);
        resultOutput.textContent = "";
        generator = buttonsValue;
      } else if (buttonsValue === "=") {
        inputTwo = Number(resultOutput.innerHTML);
        switch (generator) {
          case "+":
            sum = inputOne + inputTwo;
            break;

          case "-":
            sum = inputOne - inputTwo;
            break;

          case "/":
            sum = inputOne / inputTwo;
            break;

          case "*":
            sum = inputOne * inputTwo;
            break;
        }

        resultOutput.textContent = sum;
      }
      if (resultOutput.textContent.length > maxlength) {
        resultOutput.textContent = resultOutput.textContent.slice(0, maxlength);
      }
    });
  }
};

//resetbutton
const resetContent = () => {
  resetBut.addEventListener("click", () => {
    // Clear the typeOutput element and reset the input and result variables
    resultOutput.innerHTML = "";
    inputOne = 0;
    inputTwo = 0;
    generator = 0;
    sum = "";
  });
};

//delete thel last character
const deleteOne = () => {
  deleteBut.addEventListener("click", () => {
    let text = resultOutput.textContent;
    text = text.slice(0, text.length - 1);
    resultOutput.textContent = text;
  });
};

//starter code
changeTheme();
calculator();
resetContent();
deleteOne();
