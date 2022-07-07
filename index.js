let num = document.getElementsByClassName('number') ;
let shown_area = document.getElementById('shown_area') ;
let firstNumber = '' ;
let oper = '' ;
let secondNumber = '' ;
let result = null ;

for(let i = 0 ; i < 16 ; i++){
    num[i].addEventListener('click' , () =>{
        if(num[i].innerHTML == 'C'){
            firstNumber = '' ;
            oper = '' ;
            secondNumber = '' ;
            shown_area.innerHTML = '' ;
        }
        if(num[i].innerHTML != '=' && num[i].innerHTML != 'C'){
            shown_area.innerHTML += num[i].innerHTML ;
            if(oper != '+' && oper != '-' && oper != 'X' && oper != '/'){
                if(num[i].innerHTML != '+' && num[i].innerHTML != '-' && num[i].innerHTML != 'X' && num[i].innerHTML != '/'){
                    firstNumber += num[i].innerHTML ;
                }
                else{
                    oper += num[i].innerHTML ;
                }
            }
            else{
                secondNumber += num[i].innerHTML ;
            }
        }
        else{
            if(num[i].innerHTML != 'C'){
                firstNumber = Number(firstNumber) ;
                secondNumber = Number(secondNumber) ;
                result = calc(firstNumber , secondNumber , oper) ;
                shown_area.innerHTML = result ;
            }
            else{
                shown_area.innerHTML = '' ;
            }
        }
    })
}

function calc(first , second , oper){
    if(oper == '+'){
        return first + second ;
    }
    if(oper == '-'){
       return first - second ; 
    }
    if(oper == 'X'){
        return first * second ;
    }
    if(oper == '/'){
        return first / second ;
    }
}






