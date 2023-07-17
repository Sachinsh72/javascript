// 4. Highest marks

// Array marks consists marks of five students 
const marks = [ 440, 498, 450, 323, 477];

console.log("Marks of five students :");
console.log(marks);

const highestMarks = marks.length > 0 ?  console.log("Highest Marks is :" + Math.max(...marks)) : "No marks found"

