// 4. Highest marks

// Array marks consists marks of five students 
const marks = [ 440, 498, 450, 323, 477];

console.log("Marks of five students :");
console.log(marks);

const highestMarks = marks.length > 0 ?  console.log("Highest Marks is :" + Math.max(...marks)) : "No marks found"


// 5. Capitalize username's first letter
console.log("Program on capitalize username's first letter");

const userName = "sachin";

const correctFormat =  userName.toUpperCase().charAt(0) === userName.charAt(0) ? console.log("Enter name: " + userName) : console.log("Modified user's name: " + userName.charAt(0).toUpperCase() + userName.slice(1));