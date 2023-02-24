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

// function myFunction(x, y = 10) {
//     return x + y;
//   }
//   myFunction(5);

// function sum(x, y){
//     return x + y;
// }

// console.log(sum(4,5));

// // ------
// function add(s,v =10){
//     return s + v;
// }

// console.log(add(4));

// for default message
// function displayMessage(){
//     MessageToBeDisplayed = "default hiiii";
// }

// displayMessage("default message Hiiiii");

// displayMessage();


let arr=[12,13,14,15];
let pop =arr.pop();
console.log(pop);
console.log(arr);


