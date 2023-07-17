// 5. Capitalize username

// You are building a form where users can enter their names. You want to make sure that the first letter of the name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and returns the modified string. Otherwise, it returns the original string without any changesQ

const userName = "sachin";

const correctFormat =  userName.toUpperCase().charAt(0) === userName.charAt(0) ? console.log("Enter name: " + userName) : console.log("Modified user's name: " + userName.charAt(0).toUpperCase() + userName.slice(1));