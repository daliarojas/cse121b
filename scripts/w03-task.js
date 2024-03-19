/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    //function body
    return num1 + num2;
} 
function addNumbers(){let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2) {
    return num1 - num2;
};
const subtractNumbers = function(){
    const minuend = Number(document.querySelector('#subtract1').value);
    console.log("MINUEND:", minuend)
    const subtrahend = Number(document.querySelector('#subtract2').value);
    console.log("SUBSTRAHEND:", subtrahend)

    const difference = subtract(minuend, subtrahend);
    console.log("DIFFERENCE:", difference)
    document.querySelector("#difference").value = difference;
};
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
    return factor1 * factor2;
};  
const multiplyNumbers = () => {
    const firstFactor = Number(document.querySelector('#factor1').value);
    console.log("FIRST FACTOR:", firstFactor)
    const secondFactor = Number(document.querySelector('#factor2').value);
    console.log("SECOND FACTOR:", secondFactor)

    const product = multiply(firstFactor, secondFactor);
    console.log("PRODUCT:", product)
    document.querySelector("#product").value = product;
};
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => {
    return num1 / num2;
};

const divideNumbers = () => {
    const dividend = Number(document.querySelector("#dividend").value);
    console.log("DIVIDEND:", dividend)
    const divisor = Number(document.querySelector("#divisor").value);
    console.log("DIVISOR:", divisor)

    const quotient = divide(dividend, divisor);
    console.log("QUOTIENT:", quotient)
    document.querySelector("#quotient").value = quotient;
};
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
function sumMultipliedArray(array) { 
    const multipliedArray = array.map(number => number * 2);
    return multipliedArray.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfMultiplied = sumMultipliedArray(numbersArray);
console.log(sumOfMultiplied)
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;