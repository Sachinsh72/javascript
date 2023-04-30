//function without parameter

function sayMessage(){
    console.log("Hello! who are you");

}

sayMessage();
sayMessage();
sayMessage();
sayMessage();

//return
function messages(){
    return "Hi"
}

let message = messages();
console.log(message);

//with parameter

function myFunction(x, y = 10) {
    return x + y;
  }
//   myFunction(5);

  console.log(myFunction(5));

function sum(x, y){
    return x + y;
}

console.log(sum(4,5));

// // ------
function add(s,v =10){
    return s + v;
}

console.log(add(4));

// for default message
function displayMessage(){
    MessageToBeDisplayed = "default hiiii";
}

// displayMessage("default message Hiiiii");

console.log(displayMessage());


let arr=[12,13,14,15];
let pop =arr.pop();
console.log(pop);
console.log(arr);

function print(g =10){
    return g*g;
}

console.log(print(15)); //argument pass

console.log(print()); //default


//array pass in function

function multiply([n1,n2]){
    return n1 * n2;
}

// 1st way
let n = [10,40];
let result = multiply(n);
console.log(result);
//2nd way
console.log(multiply([10,25]));

// function with unlimited number of parameter
//argument keyword
function unlimitedSum(){
    let sum = 0;
    for(var i=0; i<arguments.length; i++)
    sum += arguments[i];
    return sum;
}

let sumResult = unlimitedSum(1,1,1,1,1,1,1,1,1,1);
console.log(sumResult);









