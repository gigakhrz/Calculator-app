const switchTheme = document.querySelector("#change");
const buttons = document.querySelectorAll('button');
const resultOutput = document.querySelector(".output");
const deleteBut = document.querySelector('#del');
const equalBut = document.querySelector('#equal');
const resetBut = document.querySelector('#reset');
const bodyTheme = document.querySelector('body');




let inputOne;
let inputTwo;
let generator;
let sum;


// this function will change calculator styles.
const changeTheme = () => {
    switchTheme.addEventListener('click', () =>{
        switch(switchTheme.value){
            case "1" : 
                bodyTheme.classList.remove('theme2');
                bodyTheme.classList.remove('theme3');
                bodyTheme.classList.add('theme1');

                break;

            case "2" : 
                bodyTheme.classList.remove('theme1');
                bodyTheme.classList.remove('theme3');
                bodyTheme.classList.add('theme2');

                break;

            case "3" : 
                bodyTheme.classList.remove('theme1');
                bodyTheme.classList.remove('theme2');
                bodyTheme.classList.add('theme3');
            break;
        }   
        
    })
}

const calculator = () =>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () =>{
            let buttonsValue = buttons[i].value;
            if(buttonsValue >= 0 && buttonsValue <= 9 || buttonsValue === '.'){
                resultOutput.textContent += buttonsValue;
            }else if(buttonsValue === "+" || buttonsValue === "-" || buttonsValue === "/" || buttonsValue === "*"){
                console.log(resultOutput.textContent);
                inputOne = Number(resultOutput.textContent);
                resultOutput.textContent= "";
                generator = buttonsValue;
            } else if(buttonsValue === '='){
                    inputTwo = Number(resultOutput.innerHTML);
                    switch(generator){
                        case '+':
                            sum = inputOne + inputTwo;
                            break;
        
                        case '-':
                            sum = inputOne - inputTwo;
                            break;
        
                        case '/':
                            sum = inputOne / inputTwo;
                            break;
                            
                        case '*':
                            sum = inputOne * inputTwo;
                            break;
                    }

                    resultOutput.textContent = sum;
                }
        })
        
    }
}


changeTheme();
calculator();
