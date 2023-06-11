//creating a promise
const promiseOne = new Promise( function(resolve, reject) {
    //Do asyn task
    // DB call, cryptographgy

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

//consuming a promise

promiseOne.then(function(){
    console.log('promise consumed');
});

//above can be writen in another way also by combine 

const promiseTwo = new Promise( function(resolve, reject) {
    setTimeout(function(){
        console.log('Async 2 task is complete');
        resolve()
    }, 1000)
}).then(function(){
console.log('promise 2 consumed')});

// .then match with resolve and .catch match with reject 

const promiseThird = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = true;
        if (!error) {
            resolve({username : 'sachin', email: 's@gmail.com'})
        }else {
            reject('ERROR: something went wrong')
        }
    },1000)
}).then(function(user){
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise either resolved or rejected");
});


const promisefour = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = false;
        if (!error) {
            resolve({username : 'ankur', email: 's@gmail.com'})
        }else {
            reject('ERROR: something went wrong')
        }
    },1000)
});

//async - await
async function consumePromiseFour(){
    const response = await promisefour;
    console.log(response);
};

consumePromiseFour();

//async - await fetch api work in node v-18
async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);
}
getAllUsers();

// promise - 

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))