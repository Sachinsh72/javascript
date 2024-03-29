/* Q6. Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console. */

async function logData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

logData();