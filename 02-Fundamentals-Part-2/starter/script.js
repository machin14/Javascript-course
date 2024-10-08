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


const friends = ['Michael','Steven','Peter'];
const newLength = friends.push('Jay');//add an elemet to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('Moshe');// add element to the start of the array
console.log(friends);

//remove elements
friends.pop();//remove the last element in the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));//Check the location of this element is in the array
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Steven'));//check if this element is in this array

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmetman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micahel', 'Peter', 'Steven']
};


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmetman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micahel', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const InterestedIn = prompt('What do you want to know about jonas? Choose betwen firstName, lastName, age, job and friends');

if(jonas[InterestedIn]){
    console.log(jonas[InterestedIn]); 
}
else{
    console.log('This value does not exist! Choose betwen firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonaschemt';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmetman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micahel', 'Peter', 'Steven'],
    hasDriverLicense: true,
   /* calcAge: function(birthYear){
        return 2037 - birthYear;
   }
//    calcAge: function(){
//     //console.log(this);
//     return 2037- this.birthYear;
//    }

    calcAge: function(){
         this.age = 2037  - this.birthYear;
         return this.age;

},
    getSummary: function(){
        if(this.hasDriverLicense){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has a driver's license `
        }
        else{
            return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has no driver's license ` 
        }
    }
};
jonas.calcAge();
console.log(jonas.age);
console.log(jonas.getSummary());

//Challenege 
// "Jonas is a 46 years old teacher and he has a/no drivers license"


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');

for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
     'Jonas',
     'Schmetman',
     2037 - 1991,
     'teacher',
     ['Micahel', 'Peter', 'Steven'],
     true
];

const types = [];

for(let i = 0; i < jonas.length  ;i++){
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    //Filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);

}
console.log(ages);

//continue and break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < jonas.length  ;i++){
    if(typeof jonas[i] !== 'string') continue; //exist the current iteration of the loop and go to the next one
     console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < jonas.length  ;i++){
    if(typeof jonas[i] == 'number') break; //exist the the loop once the condition is met
}


const jonas = [
    'Jonas',
    'Schmetman',
    2037 - 1991,
    'teacher',
    ['Micahel', 'Peter', 'Steven'],
];

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----STARTING EXERCISE ${exercise}-----`);

    for(let rep = 1; rep < 6; rep ++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}



for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep}`);
}


let rep = 1;
while(rep <= 10){
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice == 6){
        console.log('Loop is about to end..');
    }
}
*/



