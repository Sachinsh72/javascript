//----------Array

let names = ["Sachin", "Vishal", "Suman", "Rajiv", "Ajay"];

console.log(names);
console.log("Length of array is:",names.length);
console.log(names[4]);     //names[names.length-1] : for the last value
names[4] = "Ajay Kumar"
// console.log(names);

//also can declare by New Keyword

let naam = new Array("Sachin", "Ankur", "Aman", "jayant");

// Array Methods 

//push - insert a new naam at end
naam.push("Anurag");
console.log(naam);

//pop - remove from the end

// naam.pop();
console.log(naam.pop());
console.log(naam);

// how to find index place 
console.log(naam.indexOf("Ankur"));
//how to find value at particular place
console.log(naam.at(1));

//shift and unshift

console.log(naam.shift());  //remove from start
console.log(naam);

console.log(naam.unshift("Sharma"));  //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(naam);

//Slice
console.log(naam.slice(0,2)); //cutting - new array will return

// console.log(naam);

//splice

console.log(naam.splice(2,2));     //(1 : cutt start from index 1, 2 : total count ) it will return new array

//reverse

let number = new Array(1,2,3,4,5,6,7,8);

console.log(number);

console.log(number.reverse());

let arr = [1,"a",2, "c", 3, "A"];
console.log(arr.sort());