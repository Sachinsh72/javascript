// 2. Calculator

console.log("This Program Name: Calculator");

let num1 = 2;   //Please smallest value
let num2 = 8;   //Please biggest value
let operator = "+";

switch (operator) {
    case "+":
        let add = num1 + num2;
        console.log(`The addition of ${num1} and ${num2} is ${add}`);
        break;
    case "-":
        let substract = num2 - num1;
        console.log(`The substraction of ${num1} from  ${num2} is ${substract}`);
        break;
    case "*":
        let multiply = num2 * num1;
        console.log(`The multiplication of ${num1} from  ${num2} is ${multiply}`);
        break;
    case "/":
        let divide = num2 / num1;
        console.log(`The division of ${num1} from  ${num2} is ${divide}`);
        break;
    default:
        console.log("Invalid operator");
        break;
}

