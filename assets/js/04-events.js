// log the value of the input on every input


/*  //1. weg
var btnOnclick = document.querySelector('#submit');
btnOnclick.onclick = myFunction;
*/


//Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".
/*

document.getElementById("submit").addEventListener("click", myFunction);

function myFunction(){
    let output = document.querySelector('#input');
    console.log(output.value);
}

*/


/* 
document.getElementById("input").addEventListener("input", myFunction);

function myFunction(){
    console.log(document.getElementById('input').value);
}


*/

// prevent default on button #submit click
/*
  document.querySelector('#submit').removeEventListener('click',function (event) {
    event.preventDefault();
  });

*/


// and change text of #output to „Der Button wurde geklickt!“


document.getElementById("submit").addEventListener("click", myFunction);

function myFunction(){
    let inputvalue = document.querySelector('#input').value;
    document.querySelector('#output').innerText = inputvalue;
}

// log the message „500px erreicht“, when the user scrolls more than 500px

window.onscroll = function() {myFunction2()};

function myFunction2() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    console.log("500px erreicht");
    //alert("500px erreicht");
  }
}
