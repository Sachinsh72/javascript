// ------------High order function 

const powerTwo = (n) =>{
    return n ** 2;
}

function powerCude (powerTwo, n){
    return powerTwo(n) * n;
}

// console.log(powerCude(powerTwo, 3)); 

function syaHello(){
    return () => {
        console.log("Hello Sachin");
    }
}

let guessValue = syaHello();
// console.log(guessValue);
// guessValue();

// more complex example 

const higherOrder = n => {
    const oneFun = m => {
        const twoFun = o => {
            return m + n + o
        }
        return twoFun
    }
    return oneFun
};


console.log(higherOrder(2)(3)(4));

// For Each 

const myNums = [2, 3, 4, 5];

const sumArray = arr => {
    let total = 0;
    arr.forEach(function(element){
        total += element
    });

    return total
};

// console.log(sumArray(myNums));

//Methods 

function oneMoreHello(){
    console.log("Hello sachin", Math.random());
}
// setInterval(oneMoreHello, 1000);

// setTimeout(oneMoreHello, 2000);


// ----------Part Two (loops)

//for each

let arr = [2, 3, 4];

arr.forEach(function(element, index, arr) {
    console.log(index, element, arr);
});

arr.forEach((element, index, arr) =>{
    console.log("arrow",index, element, arr);
});

const heros = ["shaktiman", "krish", "Karma"];

heros.forEach((el) => {
    console.log(el.toUpperCase())
});

//map

arr.map(function(element, index, arr){
    console.log(element, index, arr);
});

heros.map((s) => console.log(s.toUpperCase()));

//filter
console.log(heros);
const heroWithMan = heros.filter((s) => {
    return s.endsWith('man');
});

console.log(heroWithMan);

//Shopping-cart

const cartBill = [200, 300, 400]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);

console.log(sumOfCartBill);

//game score

const gameScore = [200, 300, 310, 400]
//check if all the values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number');
console.log("check", gameScoreCheck);

//find score above 200

const above200 = gameScore.find((score) => score > 200);

console.log(above200);

//findIndex
//some
//sort 