//------------------Arrow function

// one parameter and single return statment
const square = (x) => x*x;
let output1 = square(5);
console.log(output1);

// multiple parameter and a single return expression
const sumOfTwoNumbers = (x,y) => x+y;
let output2 = sumOfTwoNumbers(1,2);
console.log(output2);

//multiple statment in function expression
const sum = (s,v) => {
    console.log('Adding ${s} and ${v}');
    return s+v;
};

let output3 = sum(2,3);
console.log(output3);

// returning an object
const object = (x,y)=>({sum : x+y, difference: x-y});
let output4 = object(5,3);


//------------------Anonymous functions - function without name actually store in any variable so call the function with the calling variable

let anony = function(){
    console.log("Anonymous function");

};

anony(); // calling anonymous funtion

//imidiatally invoked funtion function -- invoked/call only one time where it is declared  --- also known as self invoking function
     
// named function
(function imif(){
    console.log("Imidiate function invoked")
})();

 // anonymous function
(function (t){
    console.log(t*t);
})(5);

//-------------Expression function - anonymous funtion is also a function expression, any function store in variable or pass in any function called express funtion.


