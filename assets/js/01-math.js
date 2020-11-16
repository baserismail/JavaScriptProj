/**
 * VARIABLES
 */
const three = 3;
const six = 6;

// console.log("Hallo",10,six);

// add six to three

console.log(six+three);
console.log(6+3);
console.log(six+3);


var x=10;
var x = "11";
//var x = 20;

console.log(x);
console.log(x+three);
console.log(three+x);

// subtract six from three

console.log(six-three);
console.log(three-six);

// multiply three times six

console.log("6*3 =", six*three);


// divide three by six

console.log("6/3 = ", six/three);

// modulo six by three

console.log("6%3 = ", six%three);

// log results


// build a function, that:

function first_add(){
    return six+three;
}
console.log("first function =",first_add());


// takes two parameters

function second_add(s1,s2){
    return s1+s2;
}
console.log("second function with sitring = ", second_add(three,x));

console.log("second function with number = ", second_add(three,six));



// checks if both parameters are numbers, else returns error message in the console
function control(s1, s2){
    if(isNaN(s1/s2)){
        return "numbers of one or both are not number..";
    }
    else{
        return s1/s2;
    }
}
console.log(control(x,'ali'));

// divides the first one by the second one

function divides(s1,s2){
    return s1/s2;
}
console.log("divides function with sitring = ", divides(three,x));


// adds three to the result of the division

console.log("3 + divides = ",3+divides(three,x));

// multiplies the result by the second parameter

function divides2(s1,s2){
    return (s1/s2)*s2;
}
console.log("result*second paremeter = ", divides2(12,6));
// when the result is equal to 21, subtract 4
// else add 4

function divides3(s1,s2){
    let result = s1/s2;
    if(result==21){
        result -= 4; 
    }
    else{
        result+=4;
    }
    return result;
}
console.log(divides3(65,3));


// and then returns the result



// log the result of the function