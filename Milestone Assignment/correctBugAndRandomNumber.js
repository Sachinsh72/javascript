// 10.------------ Correct a bug

// cart
const cart = [1,4,3,4,5];

// fuction of coorect a bug
function correctBug(cart) {
    let items = []

    for (let i = 0; i < cart.length; i++) {
        items.push(cart[i]*2); 
    }

    console.log(items);
};

// function call
correctBug(cart);


//16.------------ Generate a random number 

// Use a self-invoking arrow function to generate the random number.
  (() => {
    let num = Math.floor(Math.random() * 100);
    console.log(" The generated number: "+num);
  })();