// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. 
// Call the function before it is declared to demonstrate hoisting.

console.log(totalSum);

function addNumbers(a,b){
    let sum =a+b;
    return sum;
};

let totalSum = addNumbers(12,12);

// console.log(totalSum);