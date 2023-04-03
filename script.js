const switchTheme = document.querySelector(".change");
const buttons = document.querySelectorAll('button');
const resultOutput = document.querySelector(".output");
const deleteBut = document.querySelector('#del');
const equalBut = document.querySelector('#equal');
const resetBut = document.querySelector('#reset');
const bodyTheme = document.quarySelector('body');


// this function will change calculator styles.
const changeTheme = () => {
    switchTheme.addEventListener('click', () =>{
        switch(switchTheme.value){
            case "0" : 
                bodyTheme.classlist.remove('theme2');
                bodyTheme.classlist.remove('theme3');
                bodyTheme.classlist.add('theme1');

                break;

            case "1" : 
                bodyTheme.classlist.remove('theme1');
                bodyTheme.classlist.remove('theme3');
                bodyTheme.classlist.add('theme2');

                break;

            case "2" : 
                bodyTheme.classlist.remove('theme1');
                bodyTheme.classlist.remove('theme2');
                bodyTheme.classlist.add('theme3');
            break;
        }   
        
    })
}