// 14. Calculate the final order price

// Array of customer cart
var customerCart = [
    {
        name: 'Colgate',
        unit: 45,
        quantity: 1
    },
    {
        name: 'Milk',
        unit: 78,
        quantity: 2
    },
    {
        name: 'CNC',
        unit: 20,
        quantity: 1
    }
];
  
let count = 0;

const finalPrice = () =>{
    for (let i = 0; i < customerCart.length; i++) {
        let totalCost = customerCart[i].unit * customerCart[i].quantity;
        count += totalCost;
    }
    return count;
}

console.log("The total cost of items in a customer's cart: " + finalPrice() +" Rs.");
