/* Q06. Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method. */

class Calculator{
    static add(n1,n2){
        return n1+n2;
    }
}

const cal = new Calculator();

const result = Calculator.add(10,10) //static always refers class

console.log(result);