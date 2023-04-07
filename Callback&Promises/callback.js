//hof ---> expect a function as a argument called high order function. as the particular that function is callback.

function h(x, fn){
    // h -> is a hof
    // fn -> callback
    console.log(x*x);
    fn(x*x);
}

// h(10, function(){
//     console.log("done with callback");
// })

h(10, exec)

function exec(n){
    console.log("squared value is", n);
}

// above is a synchronous callback
//below are asynchronous

console.log("start");

setTimeout(function fn() {
    console.log("timer done");
}, 3000);  // setTimeout is not the native code of js it is a trigering the runtime environment to work on this as on browser/node  so  when runtime complete the timer than it callback the function. so here two topics introduced as Event loop and Callback queue

// as js is synchronous language as a its exceute line by line - JavaScript is an interpreted language

// for(let i =0; i<10000; i++){} ---> blocking piece of code --> native code

console.log("end");

// two problems are - inversion control & callback hell to tackle this we use promises constructor