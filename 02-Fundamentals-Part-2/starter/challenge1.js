'use strict';
/*
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
    */

const dolphinsOne = 85;
const dolphinsTwo = 54;
const dolphinsThree = 41;

const koalasOne = 23;
const koalasTwo = 34;
const koalasThree = 27;

const calcAverage = (score1,score2,score3)=> (score1+score2+score3)/3;

const dolphinsAvg = calcAverage(dolphinsOne,dolphinsTwo,dolphinsThree);
const koalasAvg = calcAverage(koalasOne,koalasTwo,koalasThree);
console.log(dolphinsAvg,koalasAvg);

function checkWinner(dolphinsAvg,koalasAvg){
    if(dolphinsAvg >= koalasAvg * 2){
        console.log(`Dolphins win ${dolphinsAvg} vs. ${koalasAvg}`);
    }else if(koalasAvg >= dolphinsAvg * 2){
        console.log(`Koalas win ${koalasAvg} vs. ${dolphinsAvg}`);
    }
    else{
        console.log('There is no winner this time');
    }
}

checkWinner(dolphinsAvg,koalasAvg);