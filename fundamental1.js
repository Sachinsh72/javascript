//print
console.log("Sachin Sharma")
console.log(this)

//values & dataypes

//primitive data type

//-number: 1, 2, 3, 5, 24, 4.5
//-string: "Sachin sharma" or 'pw-skills'
//-booleans: true and false
//-null: nothing - 0 is not a null this a value called zero
//-undefined
let a;

//non-primitive data type

//-array 
let name="Sachin"  //string
let name1="Aman"    //string
let name2="Ankur"   //string
let names=["Sachin", "Aman", "Ankur"] // array

//-object: {}

//variable declare
let myName = "Ankur Sharma"
const n="Sachin"
var naam = "Ankur Sharma"

// assignment operator
let highScore = 300
console.log(highScore)

let coursePrice = 3500
console.log(coursePrice)

coursePrice= 5000
console.log(coursePrice)

let price=300
let gst=36
let totalPrice = price + gst
console.log("Total price",totalPrice)

let additional =20
console.log("Including additional price : ", additional+totalPrice )

console.log("Answer is : ", 5 % 2==0);
console.log("Answer is : ", 5 % 2); 
console.log("Answer is : ", 5 / 2); //divide
console.log("Answer is : ", 5 * 2); //multiple
console.log("Answer is : ", 5 ** 2); //square

// compare - boolean result
let compare1=200
let compare2=200
console.log(compare1 == compare2)
console.log(compare1 > compare2)


// And operater - (multiply)
let value = true
let value1 = false
let value2 = true
let value3 = false

console.log(value1 && value3)
console.log(value1 && value2)


// Or operater - (Addition)
let value4 = true
let value5 = false
console.log(value1 || value2)

//conditions and loop

//If-else

// let age = 17;
// if(age>=18){
//     console.log("You are Allowed");
// }
// else {
//     console.log("You are not allowed");
// }

// Else-if

// let signal = "green";
// if(signal=="red"){
//     console.log9("Red => stop")
// } //condition 1
// else if (signal =="yellow"){
//     console.log("Yellow =>ready to go")
// } //condition 2
// else if (signal =="green"){
//     console.log("Yellow =>ready to go")
// } //condition 3
// else{
//     console.log("invalid")
// } //last


//Switch case

let user = "admin";
switch(user){
    case "admin":
        console.log("He is admin");
        break;

    case "student":
        console.log("He is student");
        break;

    case "mentor":
        console.log("He is mentor");
        break;

        default :
        console.log("you have no permission");

}

//Loops

//do while, while, for

//for loop (init, condition, inc/dec)
console.log("for loop");

for(let i=0; i<5; i++){
    console.log(i);
}

// while (init, condition, inc/dec)

console.log("while loop");

let i = 0;          //init
while(i<5){         //condition
    console.log(i);
    i++             //inc
}

//do while
console.log("do while loop");

let m = 0;
do{
    console.log(m);
    m++;
}while(m<5);

//Ternary operater
//condition ? TRUE : FALSE
console.log("ternary operater");

isloggedin = false;
isloggedin ? console.log("Home page") : console.log("Login page") ;
