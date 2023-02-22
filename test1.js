//1
let a =3;
let b = new Number(3);
let c =3;

console.log(a==b);
console.log(a===b);
console.log(a===b);

//2
let greeting;
greeting = {};
console.log(greeting);

//3
let n = 0;
console.log(n++);
console.log(++n);
console.log(n);

//4
const sum = eval("10*10+5");
console.log(sum);

//5
var num = 8;
var num = 10;
console.log(num);

//6
console.log(typeof typeof 1);

//7
// const number = [1,2,3];
// numbers[10] = 11;
// console.log(numbers);

//8
console.log(3+4+"5");

//9
console.log("I enrolled to the PW FSWD course"[0]);

//10
// const name = "sachin";
// console.log(name());

//11
const one = false ||{}||null;
const two = null ||false ||"";
const three = [] || 0|| true;

console.log(one,two,three);

//12
var x = 2;
var y = "2";
console.log(x===y);

//13
for (let i=1; i < 5;i++){
    if(i===3) continue;
    console.log(i);
}

//14
const name = "PW Skill";

console.log(!typeof name === "object");
console.log(!typeof name === "string");

//15
for( var i = 0; i<5; i++){
    console.log(i);
}

//16
var abc = 0;
while(abc<5){
    console.log(abc);
    abc++;
}


//17
var numb = 1;
do{
    console.log(numb);
    numb++;
}while(numb<5);

//18
for(var i = 2; i<5; i++){
    if(i===3){
        break;
    }
    console.log(i);
}

//19
for(var i = 2; i<5; i++){
    if(i===3){
        continue;
    }
    console.log(i);
}

//20
var s = [1,2,3,4,5];
for(var i in s){
    if(s[i]%2===0){
        console.log(s[i]);
    }
}

//21
var p = 20;
var z = p > 10 ? p < 30 : "p is not greater than 10 and not less than 30";


