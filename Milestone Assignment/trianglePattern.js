// 8. Inverted right-angled triangle pattern with asterisks

let n = 6;
let string = "*";
for(let i = 0; i < n; i++){
    for (let j = 0; j < n-i; j++){
        string += "*";
    }
    string += "\n";
}
console.log(string);

// 9. Check for Divisibility

console.log('Program to check the given array numbers divisibility by 3 not by 2');

const num = [10, 15, 2, 7, 21, 3, 4, 8, 9, 99, 77, 53];

let divisibleStore = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] %3 === 0 && num[i] %2 != 0) {
        divisibleStore.push(num[i]);
        continue
    }
}
console.log("Given arrray:");
console.log(num);
console.log("Array with numbers divisible by 3 but not by 2");
console.log(divisibleStore);
