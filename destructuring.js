// Part 1 : Destcruting, Spread and Rest 


//++++++++++ Spread +++++++++++++++

const oneArray = [1,2,3,4];
const twoArray = [5,6,7,8];

// make one array by combining 1 & 2 
const threeArray = oneArray.concat(twoArray);  //one way
console.log(threeArray);

const thirdArray =[oneArray, twoArray]; //second way
console.log(thirdArray);

const spreadOperator =[...oneArray, ...twoArray]; //by spread operator
console.log(spreadOperator);

//++++++++++++++++++++++++++++
//++++++++++ REST (reverse of spread) +++++++++++++++
// array from object

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map( e => e )
    console.log(finalArr);
}

manyArguments(1,2,3,4,5,6,7);
// manyArguments(5,4,3,2,1,9,8,7,6);

//now by rest operator

function manyArguments2(...args){
    console.log(typeof agrs);
    let finalArr = args.map(e => e*2);
    console.log(finalArr);
}

manyArguments2(1,2,3,4,5,6,7);
// manyArguments2(5,4,3,2,1,9,8,7,6);


// ++++++++++++  examples +++++++++++++++++++++

const names = ["superman", "flash"];
const newNames = ["batman", ...names, "thor"];  //spread
console.log(newNames);  

const myname = "sachin";
console.log([...myname]);   //spread

function restOperator(...values){
    return values;
}
console.log(restOperator("sachin","sharma"));  //REST - here we get value then convert it into array


// ----------------------------------------

// Part 2 : Sets and Map 

let emptySet = new Set();

console.log(emptySet.size);

let myArray = [1,2,3,3,2,4];
let newSet = new Set(myArray);
console.log(newSet);

newSet.add(9);
console.log(newSet.has(9));
newSet.clear();
newSet.delete(1);
console.log(newSet);
console.log(newSet.has(9));

let newSet2 = new Set([11,22,33,44,55,66]);
console.log(newSet2);
console.log(...newSet2); //spread

// Set difference
// setA = [1,2,3,4,5];

function setDifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)));   
}

