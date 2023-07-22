// 15. Calculate the percentage of the discount

const prompt = require("prompt-sync")({sigint:true});

// original price
const originalPrice = prompt(console.log(`Enter the Original price: `));

//discount is available or not
const dis = prompt(console.log("Discount is avaible the type y/n ?"));

if(dis == "y"){
    //enter the discounted price
    const discountedPrice = prompt(console.log(`Enter the Discounted price: `));

    //get total amount of discount
    const discount = Number(originalPrice - discountedPrice);

    // arrow function of discount percentage
    const discountPercentage = ()=>{
        //get percentage of total amount given
        const totalDiscount = (discount/originalPrice) *100;
    
        return totalDiscount.toFixed(2)
    };

    console.log("Original price: " + originalPrice + " Rs.");
    console.log("Discounted price: "+ discountedPrice + " Rs.");
    console.log("Total Discount given: " + discountPercentage() + "%");

}else{
    console.log("Price of the product: " + originalPrice + " Rs.");
};