// 1. Password Validator

console.log("This Program Name: Password Validator");
//correct password
const correctPassword = 1234;

//enter password
let enterPassword = 1234;

console.log(`Given password is ${enterPassword}`);

if(correctPassword === enterPassword){
    console.log("Password Matched. Password validation Successful.");
}else{
    console.log("Password didn't match. Password validation unsuccessful");
};