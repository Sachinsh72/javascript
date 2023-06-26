/* The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */

console.log("Here are reversing the string  by 2 second");
//variable
const str = "input";

setTimeout(()=>{

    const result = str.split("");

    const reverseString = result.reverse();

    const join = reverseString.join("");
    
    console.log("The Reverse of " + str + " is " + join);

}, 2000);