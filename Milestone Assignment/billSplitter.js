// 13. Bill splitter

const prompt = require("prompt-sync")({sigint:true});

let dishPriceList = [];

// Gets user input
const number = prompt("Enter the total number of dish: ");

//loop to get dish price list
let count = 1;
while (count <= number) {
    let input = parseInt(prompt("Enter "+ count +" dish price: "));
    dishPriceList.push(input);
    count++
};
console.log("dish price list: " +dishPriceList);

// Gets user input
const totalPerson = parseInt(prompt("Enter total number of sharing: "));
let totalAmount = 0;

//loop to get total amount of dish price list
for (let i = 0; i < dishPriceList.length; i++) {
    totalAmount += dishPriceList[i];
};

console.log("Total amount to be paid: " + totalAmount);

// divide the price with total number of sharing
const perPerson = parseFloat(totalAmount/totalPerson);

console.log("Total amount to be paid per person: " + perPerson);