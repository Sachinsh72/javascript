//Filtering and Capitalizing: Books Published After 2010 with Author Names.

/* Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.*/


let obj = {
	'Books': [{
        "BookName": "Lal Salam",
		"AutherName": "Smriti Irani",
		"PublishedYear": "2022",
		
	}, {
		"BookName": "Right Under Our Nose",
		"AutherName": "	R. Giridharan",
		"PublishedYear": "2021",
	},
	{
		"BookName": "Changing India",
		"AutherName": "Dr. Manmohan Singh",
		"PublishedYear": "2018",
	},
    {
		"BookName": "Never Mind",
		"AutherName": "Avi",
		"PublishedYear": "2005",
	},
    {
		"BookName": "The Sea.",
		"AutherName": "John Banville",
		"PublishedYear": "2002",
	}]
};

let newArray = obj.Books.filter(function (el) {

    if(el.PublishedYear < 2010){
        console.log("Book Name: " + el.BookName + ", Auther Name: " + el.AutherName.toUpperCase() + ", Year: " + el.PublishedYear);
    }
});