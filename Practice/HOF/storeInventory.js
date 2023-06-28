/* Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */


//List of store inventory and their prices in dollars 
var storeInventory = { 'Chair': 4, 'Table': 8, 'Fan': 12 };

console.log("List of store inventory and their prices in dollars ");
console.log(storeInventory);

// Program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR
Object.keys(storeInventory).map((key)=> {
  storeInventory[key] *= 80;
});

// New object with the converted prices in Rupees
console.log("List of store inventory and their prices in INR");
console.log(storeInventory)
