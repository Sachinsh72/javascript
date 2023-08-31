/* Q1. Write a function that takes in an array of integers and a callback function, 
and returns a new array where each element is doubled using the callback. */

function double(arr, fn){
    const doubleArr = arr.map((n)=>{
        return fn(n)
    });
    return doubleArr
}

let arr = [1,2,2,3,4];

function fn(n){
    return n*2;
}

console.log(double(arr,fn));  // [ 2, 4, 4, 6, 8 ]
