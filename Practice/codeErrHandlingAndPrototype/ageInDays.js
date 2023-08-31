/* Q3. Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays. */

const personDetails = {
first_name: "sachin",
last_name: "sharma",
age: 23
}


function ageInDays(personDetails, result ){
    const fullName = `${personDetails.first_name} ${personDetails.last_name}`;
    const ageInDays = personDetails.age * 365;
    result(fullName,ageInDays)
}

function result(fullName, ageInDay){
    const logResult = `The person full name is ${fullName} and thier age in days is ${ageInDay}`
    return console.log(logResult);
}

ageInDays(personDetails,result);
