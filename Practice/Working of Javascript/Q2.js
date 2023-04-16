// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. 
// Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

console.log(multiplyNumbers(4,5));

let multiplyNumbers = function(a,b){
    multiply = a*b;
    return multiply;
};
