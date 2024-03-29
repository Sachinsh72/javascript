console.log("-----Variables------");

//variables
const accountId = 144553;
let accountEmail = "sachin@gmail.com";
var accountPassword = "12345";  //var doesn't know block scope but let knows - { block scope}
accountCity = "Delhi";
let accountState ;

/*
Prefer not to use var bsc of block scope or functional scope
const is not changeble
*/

// accountId = 15554;  //when we print it will provide error bcz it is already declared as a var

accountEmail = "sharma@gmail.com";
accountPassword = "123456";
accountCity = "banglore";

console.log(accountId);   //for singleprint 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //for multiple print in one way

console.log("---------DataType-------------");

"use strict"; //treat all JS code as newer version

//alert( 3 + 3 );  //we are using node, not browser

//code readeability should be high

let name = "sachin"; //String data type " "
let age = 23 ; // number - 2 to power 53, bigint = for big number
let isLoggedIn = false //boolean - true/false
//undefined - not defined
//null - standalone value
//symbol - unique

// typeOf - to know the typw of data
console.log(typeof null); // null is object
console.log(typeof undefined); // undefined
console.log(typeof "sachin"); // string type