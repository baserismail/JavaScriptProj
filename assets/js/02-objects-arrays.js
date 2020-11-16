/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox',
  
};

// add a new book to the books object
// using dot notation
// using square bracket notation

books.book4 = 'Harry Potter';
books["book5"]="Donkişot";

//console.log(books.book4);
//console.log(books['book5']);

// remove an book from the books object

//delete books.book4;

//console.log(books.book4);

// log the third book

// iterate over the books and log every single one

function showBooks(){

for(book in books){
  console.log(book,"=", books[book]);
}
}

function findKeyByValue(bookName){
	key=null;
	for(item in books){
		if (books[item] == bookName){
			key=item;
		}
	}
	return key;
}

console.log("books key=",findKeyByValue('Fantastic Mr. Fox'));

/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array

movies.push("Matrix");
console.log(movies[movies.length-1]);

movies.shift('Ring');
console.log("1. Movie = ",movies[0]);


// remove the movie „Call me by your name“ from the movies object


  function findKey(obj, value)
	{
		var key = null;

		for (var prop in obj)
		{
			if (obj.hasOwnProperty(prop))
			{
				if (obj[prop] === value)
				{
					key = prop;
				}
			}
		}

		return key;
  }
  
 console.log( findKey(books,'Faust'));

//var deleteValue= findKey(books,'Donkişot');

 delete books[findKey(books,'Faust')];

// removeBook(books,"Donkişot");
showBooks();


// log the first movie

console.log(movies[0]);

// console.log(movies[0]);

// iterate over the movies and log every single one 

for(movie in movies){
  console.log(movies[movie]);
}