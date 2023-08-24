/* Q09. Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise. */

function numberChecker(array){
    return function number(num){
        return array.includes(num);
    }
};

const array = [1,3,5,7,9];

const check = numberChecker(array);

console.log(check(7)); //true
console.log(check(2)); //false