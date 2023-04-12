//----------Loops --- also called Iteration

//For loop

for(let i=0; i<5; i++){
    console.log(i);
};

let arr = ["pw", "bmw", "audi"];

for(let i=0; i<arr.length; i++){
    console.log("At index " + i + " value is " + arr[i]);
};


// For In loop

let obj = {
    name : "sachin",
    education : "graduate",
    age : 23
}

for( const i in obj){
    console.log(i);
    console.log(obj[i]);
}

// For of loop

for (const ite of arr) {
    console.log(ite);
}


// While loop

let newI = 0;

while (newI <=5) {
    console.log("value of i is " + newI);
    newI = newI + 2;
}


//----------Conditionals

// If statement

if(1==1){                               
    console.log("Statement executed");
}


// If  Else statement

let userToken = "newvalue";

if(userToken) {                         
    console.log("user allowed to log in");
}else{
    console.log("user not allowed to log in");
}


// Else If staement

let student = false;
let employee = false;

if(student){
    console.log("student verified");
}else if (employee){
    console.log(" employee verified");
}else{
    console.log("please verify as a student or employee");
}


// Ternary operator

let logged = true;

logged ? console.log("login") : console.log("logout");


// Switch case

let userId = 5;

switch (userId) {
    case 1:
        console.log("User id 1");
        break;
    case 2:
        console.log("User id 2");
        break;
    case 3:
        console.log("User id 3");
        break;
    case 4:
        console.log("User id 4");
        break;
    default:
        console.log("Please enter correct user id");
        break;
}
