/* Q2. Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. 
The Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. 
The function should return a callback function "logString" that logs the sentence "The manipulated string is: "
along with the manipulated string or the new string to the console. */

function manipulateStr(str, logString){
    return console.log("The manipulated string is: " + logString(str));
}

let str = "sachin sharma";

function logString(str){
    return str.toUpperCase();
}

manipulateStr(str,logString);
