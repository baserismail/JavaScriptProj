// log text content from #headline

         var textheadline = document.getElementById("headline").textContent;

        console.log(textheadline);

// change the text from the headline to:
// „Cool, sie ist offen! :)“

        textheadline = "Cool, sie ist offen! :)";    

        document.getElementById("headline").innerText = textheadline;

// set value of the input element #input to:
// „Hier steht Text“

        const inputitem = document.querySelector('#input');
        inputitem.value = "Hier steht Text";

// set the value of the input element #input
// as the innerHtml of the div #output

        const output = document.querySelector('#output');
        output.innerHTML=inputitem.value;

        // function writeOutput(){
        //     var inputtext = document.getElementById("input").value;
        //     document.getElementById("output").innerHTML = inputtext;
        // }





// add the class bg-black to the body
// if there it doesn't got it already

//document.body.style.backgroundColor='red';
const body = document.body;
if(!body.classList.contains("bg-black")){
    body.classList.add('bg-black');
}


// toggle the class border-red on the input

// multiply the data-number attribute by 3
// and update the value in the dom


        document.getElementById("submit").onclick=function(){
            document.getElementById("input").classList.toggle("border-red");
            
        }

