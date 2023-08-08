/*  Q2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements. */

function uniqueElement(str){
    return new Set(str);
}

// first array 
const arr = [1,2,3,4,5,6,6];
// second array 
const arrSecond = [2,2,2,2,4];

console.log(uniqueElement(arr));
console.log(uniqueElement(arrSecond));