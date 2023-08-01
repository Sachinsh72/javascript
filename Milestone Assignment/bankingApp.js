// 17. Banking Application

const prompt = require("prompt-sync")({sigint:true});

// customer list with balance 
const obj = [
    {name : "sachin", balance : 2500},
    {name: "ankur", balance: 3000},
    {name: "aman", balance: 300},
    {name: "bharat", balance: 30}
];

// customer name 
const customerName = prompt(console.log("Customer name: "));

// process operation 
const operation = prompt(console.log("wd: withdrawl or de: deposite ...(de/wd)?"));

obj.forEach((element) => {

    if(customerName == element.name){
        //curren balance
        let balance = element.balance 
        console.log(`${customerName}'s current balance: ${balance}`);

        let str = "wd"
        //withdrawl operation
        if (operation === str) {
            const withdrawlAmount = prompt(console.log("Enter withdrawl amount: "));
            if(balance < withdrawlAmount ){
                console.log("Insufficient balance");
            }else{
                console.log("sucessfully withdrawl!");
                console.log("Your updated balance: " + (balance - withdrawlAmount));
            }
        }else{
            //deposite operation
            const depositeAmount = prompt(console.log("Enter deposite amount:"));
            let updateBalnce = Math.floor(balance + parseInt(depositeAmount));
            console.log("sucessfully deposited!");
            console.log("Your updated balance: " + updateBalnce);
        }
    }     
});