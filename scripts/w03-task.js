/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    //function body
return num1 + num2;
}
let addNumber1 = Number(document.querySelector('#add1').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2) {
    return num1 - num2;
};
const subtractNumbers = function(){
    const minuend = parseInt(document.querySelector("#minuend").value);
    console.log("MINUEND:", minuend)
    const subtrahend = parseInt(document.querySelector("#subtrahend").value);
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
    const firstFactor = parseInt(document.querySelector("#factor1").value);
    console.log("FIRST FACTOR:", firstFactor)
    const secondFactor = parseInt(document.querySelector("#factor2").value);
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
    const dividend = parseInt(document.querySelector("#dividend").value);
    console.log("DIVIDEND:", dividend)
    const divisor = parseInt(document.querySelector("#divisor").value);
    console.log("DIVISOR:", divisor)

    const quotient = divide(dividend, divisor);
    console.log("QUOTIENT:", quotient)
    document.querySelector("#quotient").value = quotient;
};
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Odds Only Array */
function findOdds(value) {
    return value %2 != 0;
}
const oddFiltered = array.filter(findOdds);
console.log(oddFiltered)

document.querySelector("#odds").textContent = oddFiltered

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
function sumMultipliedArray(array) {
    return multiplied.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfMultiplied = sumMultipliedArray(array);
console.log(sumOfMultiplied)
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;