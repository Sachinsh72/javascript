// Pattern matching thing - regex

let pattern = 'sachin';
let regExOne = new RegExp(pattern); //easiest way by using object


let flag = 'gi';  //second way by flag (g is global , i case insensitive)
let regExTwo = new RegExp(pattern, flag);


let regExThree = /sachin/gi  //third way - shortcut by /pattern_name/flag


const strToChcek = "sachin sharma is learning full stack web development as registed with the name of Sachin sharma";


const result = regExThree.test(strToChcek); //you can by ask string to be regex


console.log(result); // //result always boolean value


const anotherResult = strToChcek.match(regExThree); // another way of result
console.log(anotherResult);


const oneMoreResult = strToChcek.replace(regExThree,'Ankur');  //way to replace -imp
console.log(oneMoreResult);


// now we are going to pattern match till now matich string.

const webUrl = "https://sachin.com/sachin70%sachin"
const useable = webUrl.replace(/\d0%/,'-');  // \d denotes number
console.log(useable);


//regexr.com  use to read and test
