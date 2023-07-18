// 10. Correct a bug

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
