/* Q5. Min and max values.
You are building a program that needs to find the maximum and minimum values in an array of numbers. You
decide to write a function that can accomplish this task by taking an array of numbers as input and using the
spread operator with the Math methods max() and min(). The function should return an object with two
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }. */

const array = [5, 2, 7, 1, 9];      //array

let max = Math.max(...array);       //max
let min = Math.min(...array);          //min

// function return an obj 
function minMax(arr) {
    const obj = {
        max : max,
        min : min
    }
    return obj;
}

console.log(minMax(array));     //print return an object { max: 9, min: 1 }
