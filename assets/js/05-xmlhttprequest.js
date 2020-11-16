// listen to the submit of the form and prevent default

/*

document.querySelector('#submit').addEventListener('click',getInput);

  
function getInput(){
    var inputValue = document.querySelector('#input').value;
    alert(inputValue);
}

document.querySelector('#submit').removeEventListener('click',getInput);
*/

// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php

var formData = new FormData();

document.querySelector('#submit').addEventListener('click',sendForm);

function sendForm(){
    const XHR = new XMLHttpRequest();
    var formData = new FormData();

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
    // Set up our request
    XHR.open( "POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php" );

    // The data sent is what the user provided in the form
    XHR.send(formData);

    var formvalue = document.querySelector('#input').value;
    // formData.append('inputtext',formvalue );
    document.querySelector('#output').innerHTML = formvalue;
   

    const form = document.getElementById("fetch-form");

    // ...and take over its submit event.
    form.addEventListener( "submit", function (event) {
      event.preventDefault();

});

}

// log the response

// get data from public api https://openlibrary.org/books/OL7353617M.json
// and display the title, first sentence & isbn 13 in the #output element
