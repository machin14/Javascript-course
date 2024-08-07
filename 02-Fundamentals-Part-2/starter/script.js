'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('I can drive');

//const interface = 'Audio'; strict mode error
//const private = 534; strict mode error


function logger(){
    console.log('My name is Guy');
}
// calling/ running/ invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//FUnction decleration
function calcAge1(birthYear){
const age = 2037 - birthYear;
return age;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear){
    const age = 2037 - birthYear;
    return age; 
}

const age2 = calcAge2(1991);
console.log(age1,age2);
 */

//Arrow function
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName)=>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));






