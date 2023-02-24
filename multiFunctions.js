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

