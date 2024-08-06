
/*let js = 'amazing';
// console.log(40+8+23-10);

let firstName = "Matilda";
let first = "jonas";
let firstNamePerson ="Guy";
let first_name_person = "Moshe";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992;   

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Mechtinger';
console.log(lastName);

//math operators
const  now = 2037;
const ageGuy = now - 1992;
const ageSarah = now - 2020;
console.log(ageSarah,ageGuy);

console.log(ageGuy* 2, ageGuy/ 10, 2**3);
//2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName =  'Guy';
const lastName = 'Mechtinger';
console.log(firstName+' '+lastName);

//assignment operators
let x = 10 + 5;
x += 10;// x= x + 10 = 25
x *= 4; // x= x*4 = 100
x++; //x= x+1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageGuy  > ageSarah); //>,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge= ageSarah >= 18;

console.log(now - 1991 > now -2018);

const averageAge = (ageGuy + ageSarah) / 2;
console.log(ageGuy,ageSarah, averageAge);


const firstName = 'Guy'
const job = 'teahcer';
const birthYear = '1991';
const year = 2037;

const guy = "I'm " + firstName + ',a ' +  (year-birthYear) + ' years old ' + job + '!';
console.log(guy);

const guyNew = `I'm ${firstName},a ${year-birthYear} years old ${job}!`;
console.log(guyNew);

console.log(`Just a regular String...`);


const age = 15;

if(age >= 18){
console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birth = 1991;
let century;

if(birth<=2000) {
    century = 20;
}else {
    century = 21;
}
console.log(century);

//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

//TYPE COERCION
console.log('I am '+ 23 + ' years old');
console.log('23'-'10'-3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Don't spend it all ;)");
}else{
    console.log('You should get a job');
}

let height = 0;
if(height){
    console.log('YAY! Height is defined');
}else {
    console.log('Height is UNDEFINED');
}
   
const age = 18;
if(age === 18) console.log('You just became an adult :D');//strict equality
if (age=='18') console.log('You just became an adult :D- double =');//loose equality

const favorite = Number (prompt("Waht's your favorite number?"));
console.log(favorite);

if(favorite === 23){
    console.log('cool! 23 is amazing number');
}else if(favorite === 7){
    console.log('7 is also a cool number');
}else {
    console.log('Number is not 23 or 7');
}

if(favorite !== 23){
    console.log('Why not 23?');
}



const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense );

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah is able to drive!');}
//     else{
//         console.log('Someone else should drive..');
//     }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(shouldDrive && !isTired){
    console.log('Sarah is able to drive!');}
    else{
        console.log('Someone else should drive..');
    }
 

    const day = 'tuesday';

    switch(day){
        case 'monday':
            console.log('Plan my course structure');
            console.log('Go to coding meetup');
            break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            break;
        case 'friday':
            console.log('Record videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend :D');
            break;
        default:
            console.log('Not a vaild day');
    }

    if(day === 'monday'){
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
    }else if(day === 'tuesday'){
        console.log('Prepare theory videos');
    }else if(day === 'wednesday' || day === 'thursday'){
        console.log('Write code examples');
    }else if(day === 'firday'){
        console.log('Record videos');
    }else if(day === 'saturday' || day === 'sunday'){
        console.log('Enjoy the weekend :D');
    }else{
        console.log('Not a vaild day');
    }
    */
  
const age = 23;
//age >= 18 ? console.log('I like to drink wine')://Ternery operator - three parts
//console.log('I like to drink water');

const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);