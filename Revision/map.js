let num = [1,2,3];

num.map((el)=>{
    let newNum = el*10;
    console.log(newNum);
})

console.log(num);

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map = array1.map(x => x * 2);

console.log(array1);
console.log(map);
// Expected output: Array [2, 8, 18, 32]

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);

numbers.map((el,index) =>{
    console.log(el,index);
});

let totalNumber = 0;
numbers.map(totalSum)

function totalSum(el){
    totalNumber += el;
};
console.log("Total sum :",totalNumber);