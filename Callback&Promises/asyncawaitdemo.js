function createPromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            // resolve("done");
            reject(10);
        }, 3000);
    });
}

async function consume() {      
    // return 10;
    try{
    console.log("inside function");
    const response = await createPromise();
    const response1 = await createPromise();
    console.log("response is", response);
    } catch(err) {
        console.log("handled", err);
    }
    
}
console.log("start");
consume();

console.log("end");

//fetch api - run below code in browser console

// fetch("http://type.fit/api/quotes")
// .then(function f(response) {
//     return response.json();
// })
// .then(function f(value) {
//     console.log(value);
// })