// 12. Calculate Rental Cost

//car type
const carType = "Midsize";

//Rent duration in number of days
const rentDuration = 2;
let rentCost;

switch (carType) {
    case "Economy":
        rentCost = rentDuration*4000;
        console.log(`The Rental Cost of Economy Car for ${rentDuration} days is ${rentCost}`);
        break;
    case "Midsize":
        rentCost = rentDuration*10000;
        console.log(`The Rental Cost of Economy Car for ${rentDuration} days is ${rentCost}`);
        break;
    case "Luxury":
        rentCost = rentDuration*20000;
        console.log(`The Rental Cost of Economy Car for ${rentDuration} days is ${rentCost}`);
        break;
    default:
        console.log("Invalid car type");
        break;
};