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
 

function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const OrangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${OrangePieces} pieces of oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function(birthYear){
    return 2037- birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    //return retirement;
    if(retirement> 0){
        return `${firstName} retires in ${retirement} years`;
    }
    else{
        return `${firstName} already retired ${Math.abs(retirement)} years ago`;
    }
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1950,'Mike'));
*/

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter'];//litteral sintax
console.log(friends);

const years = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);//Number of elements in the array
console.log(friends[friends.length-1]);//last element of the array

friends[2] = 'Guy';
console.log(friends);

const jonas = ['Jonas','Shwetman',2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
function calcAge1(birthYear){
    return  2037 - birthYear;
}

const yearsNew = [1990,1967, 2002, 2010, 2018];

console.log(calcAge1(yearsNew));//NaN- we cannot do operations on arrays

const age1 = calcAge1(yearsNew[0]);
const age2 = calcAge1(yearsNew[1]);
const age3 = calcAge1(yearsNew[yearsNew.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge1(yearsNew[0]),calcAge1(yearsNew[1]),calcAge1(yearsNew[yearsNew.length-1])];
console.log(ages);

