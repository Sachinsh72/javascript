// Promises is readiability enhancer, there  are three state resolve , reject, prnding

function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            resolve("done");
        }, 3000);
    });
}

console.log("start");
let x = createPromise();
console.log("got a new promise");

// this is registration

x.then(function f(){                // x.then itself call a promise
    console.log("promise done");
}).catch(function g(value) {
    console.log("handled", value);
}).finally( function fn() {
    console.log("finally");
});  

console.log("end");

// for(let i = 0; i < 10000000; i++){
//     // some code
// }