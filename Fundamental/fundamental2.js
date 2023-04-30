// -------------Array - it stores ordered list of elements. it can hold elements of any data type. Array are a type of object in js and have a number of built-in methods for adding, removing, and manipulating elements.
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

//Array method 

let arr = [1,2,3,4,5];
arr.push(6,7); //add at last
console.log(arr);

arr.pop();  //remove last
console.log(arr);

arr.shift(); //remove first
console.log(arr);

arr.unshift(9); //update the value at 0th index.
console.log(arr);

// if you store shift & pop then that variable return that value example below.

let array = [1,2,3,4,5,6,7,8,9]

let pop = array.pop();
console.log(pop);

let shift = array.shift();
console.log(shift);
console.log(array);

//Now for other methods

let a1 = [1,2,3,4];
let a2 = [3,4,5,6];
let a3 = a1.concat(a2);
console.log(a1, a2, a3);

// club all elements of array
let s = a3.join("");
console.log(s);

let p = a3.join("@");
console.log(p);

//for reverse method

a3.reverse();
console.log(a3);

//for finding index of  particular number 
console.log(a3.indexOf(4));

//for fetching continues section or portion
console.log(a3.slice(2,5));  //print -4,5,4,

console.log(a3);

//for adding element in middle
a3.splice(2, 0, 11);



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

sqr(8); // 8-->arguments

// let a =sqr(8);
console.log(a);

//------------Object - An object is an entity with a certain state and behaviour. eg car,cycle, glass
// objects can contain amny values
// Object values are written as key : value pairs - eg. let person = {firstName : "Sachin", lastNme : "sharma", age : 23};


// creation of object
//1st way
let obj = {id : 101, naam : "Sachin Sharma", salary : 95000 };
console.log(obj);

//2nd way
let emp = new Object();
emp.id =102;
emp.name = "Ankur";
console.log(emp);

//3rd way
function Emp(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e =new Emp(103,"Sachin", 99000);

console.log(e);
console.log(emp.id); //call a value form object by dot operator
console.log(emp["name"]); //call value by square operator

emp.salary = 99999;  // you can update a value by targeting particular name

console.log(emp.salary);

emp["name"] = "Ankur Sharma";

delete emp.id; // delete

console.log(emp);


//Object function & methods

// fetching keys of an object
let keys = Object.keys(emp);
console.log(keys);

// fetching values
let values = Object.values(emp);
console.log(values);

// feteching keys and values both at a time
let entries = Object.entries(emp);
console.log(entries);

// not updating/adding and key/value an object in future

// Object.freeze(emp);
// emp.name = "randome";
// console.log(emp);

//only allow upadte not add or delete key value pair
Object.seal(emp);
emp.name="update name";
emp.id = 9090;
console.log(emp);

// for assigning the one objcet in other object with same or extra key value pair

let o = Object.assign({},emp);
console.log(o);

let assign = Object.assign({ x : 15},emp);
console.log(assign);