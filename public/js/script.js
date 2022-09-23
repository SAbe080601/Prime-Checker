/* Name: Shinya Abe
   Date: 3/31/22
   Pledge: I pledge my honor that I have abided by the Stevens honors system
   Class: CS 546
   Assignment: lab9
*/

let myForm = document.getElementById('myForm');
let attempts_list = document.getElementById('attempts');
let form_label = document.getElementById('form_label');
let input = document.getElementById('number');
let error_div = document.getElementById('error');

function is_prime(num){
    num = num.trim();
    if(num.length === 0){
        throw "Error: You must enter a value!";
    }
    num = Number(num);
    if(typeof num !== 'number' || num === NaN){
        throw "Error: Input is not a number!";
    }
    if(!Number.isInteger(num)){
        throw "Error: Must be an Integer!";
    }
    if(num < 2){
        throw "Error: Input must be greater than 1!";
    }
   
    let prime = true;
    for(let i = 2 ; i< num; i++){
        if((num % i) === 0){
          prime = false;
        } 
    }

    if(!prime){
        return false;
    } else{
        return true;
    }
}

if(myForm) {
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let arg = input.value;
        try {
            form_label.classList.remove('error');
            error_div.hidden = true;
            input.classList.remove('input_error_class');
            input.classList.add('rounded-input');
            let list_elem = document.createElement('li');
            if(is_prime(arg)){
                list_elem.innerHTML = `${arg} is a prime number`;
                list_elem.classList.add('isPrime', 'list_elem');
            } else{
                list_elem.innerHTML = `${arg} is NOT a prime number`;
                list_elem.classList.add('notPrime', 'list_elem');
            }
            attempts_list.appendChild(list_elem);
            myForm.reset();
        }  catch (e)  {
            input.value = '';
            error_div.hidden = false;
            error_div.innerHTML = `${e}`
            form_label.className = 'error';
            input.className = 'input_error_class';
        }
    })
}