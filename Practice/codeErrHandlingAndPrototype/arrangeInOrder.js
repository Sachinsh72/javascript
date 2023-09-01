/* Q4. Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */

let books = [
    {
        title: "The India Story",
        author: "Bimal Jalal",
        year: 2022
    },
    {
        title: "Vahana Masterclass",
        author: "Alfredo Covelli",
        year: 2021
    },
    {
        title: "Malayalam poetry",
        author: "Akkitham Achuthan Namboodri",
        year: 2019
    }
];

function arrangeInOrder(books, titleInOrder){

    let titles = books ? books.map((i) => i.title) : " book list not availbale";
    titleInOrder(titles);   
}

function titleInOrder(arr){
    const sorted = arr.sort();
    console.log(sorted);
}

arrangeInOrder(books,titleInOrder);