// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(1991);


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

//1)Understand the problem
//What is temperature amplitude? difference between highest and lowest temp
//How to compute the max and min temp?
//What's a sensor error? And what to do when one occurrs?

//2)Breaking up into sub-problems
//-How to ignore errors?
//Find max value in temp array
//Find min value in temp array
// substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problem 2:
//Function should now receive 2 arrays of temperatures
//with 2 arrays, do we need to implement functionality twice? No- Just merge two arrays
//merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKalvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C) FIX THE BUG
    value: Number(prompt('Degrees celsius:')),
  };
  //B) FIND THE BUG
  // console.table(measurement);
  // console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY THE BUG
console.log(measureKalvin());
*/

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast + `...${arr[i]}c in ${i + 1} days`;
  }
  //`''...${arr[i]}c in ${i + 1} days`;
  //`''...${arr[i]}c in ${i + 1} days` `''...${arr[i]}c in ${i + 1} days`;;
  return forecast + '...';
};
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

console.log(printForecast(temp1));
console.log(printForecast(temp2));

//PROBLEM A)
//how to concat the temps per the days in the array in one row
