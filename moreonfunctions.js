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

setTimeout(oneMoreHello, 2000);
