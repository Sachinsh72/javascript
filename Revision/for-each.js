//For each loop
let sum = 0;
let totalNumber = 0;
const number = [10,20,30];

//simple by passign arguments
number.forEach((el) =>{
    sum += el;
})

console.log("Sum : ",sum);

//by passing a function named totalSum
number.forEach(totalSum)

function totalSum(el){
    totalNumber += el;
}

console.log("Total sum :",totalNumber);

//just prinnted all element with index number
number.forEach((el,index) =>{
    console.log(el,index);
});

//multiply of 10 all element by this printed per multiplications
number.forEach((el,index,arr) =>{
    arr[index] = el*10;
    console.log(arr[index]);
});

// multiply by 10 and got in array form 
const newArr = [];
number.forEach((el,index,arr) =>{
    newArr.push(el*10);
});
console.log(newArr);






