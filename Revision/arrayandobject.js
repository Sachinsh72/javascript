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

//push - insert a new naam

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

console.log(naam.shift(1));  //value from first
console.log(naam.unshift("Sharma")); 
