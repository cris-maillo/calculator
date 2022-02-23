let result;
let operator;
let screen = document.getElementsByClassName("screen");

function add(num1, num2) {
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
    return result;
}

function operate(operator, num1, num2) {
    if (operator == "add") {
        add(num1, num2);
    }else if(operator == "subtract"){
        subtract(num1, num2);
    }else if(operator == "multiply"){
        multiply(num1, num2);
    }else{
        divide(num1, num2);
    }
    
    return result;
}

console.log(operate("divide", 5, 6));