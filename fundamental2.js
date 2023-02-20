// Array - it stores ordered list of elements. it can hold elements of any data type. Array are a type of object in js and have a number of built-in methods for adding, removing, and manipulating elements.
 //need - grouping related data, storing large amount of data, improving performance, ease of use, better readability

 let a = [1,2,3,"sachin", 3.4];
 console.log(a);

 let b = new Array(5);
 console.log(b);

// given array -[11,12,13,14,15]
// indexes/pos - [0,1,2,3,4] - last element index = arr.length - 1

console.log(a[0]);
a[4] = 44; // updating value at the index 4
console.log(a);

//Array function - block of the code that performs asoecifuc task and can be reused throughout the program.

// function in js are first-class citizens, meaning theycan be assigned to variables, passed as argument to other funtions, and returned firom functions.

// function declaration

//  function functionNmae(){
//     // function body
//  }

function greet(){
    console.log("Hi there");
    console.log("How are you");
}

function sqr(x){ //x--> paramenter
    //console.log(x*x);
    return x*x;
}

greet();

// sqr(8); // 8-->arguments

let a =sqr(8);
console.log(a);