const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
const del = document.querySelector('de');
let screenValue = '' ;
for (items of buttons){
    items.addEventListener("click", (x)=>{
        buttonText = x.target.innerText ;
        if (buttonText == 'x') {
            buttonText= '*' ;
            screenValue +=  buttonText ;
            screen.value = screenValue ;
            console.log("printing x value",screenValue);
        } 
         else if(buttonText == 'AC') {
            screenValue =  "" ;
            screen.value = screenValue ;
        }
        else if(buttonText == '=') {
            screen.value = eval(screenValue) ;
        }
        else if(buttonText == 'DE'){
            // screenValue = screen.innerText.slice(0,screen.length -1) ;
           screenValue= screenValue.slice(0,-1)  ;
            screen.value = screenValue;
        
            console.log("printing slice value",screenValue);
        }
        else if(buttonText == '%') {
            screenValue =  (screenValue/100) ;
            screen.value = screenValue ;
        }
      else {
        screenValue +=  buttonText ;
        screen.value = screenValue ;
      }

       })
}



