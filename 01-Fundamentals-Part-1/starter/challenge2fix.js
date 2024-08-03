const markWeight = 78;
const markHeight = 1.69;
const johnWeight= 92;
const johnHeight = 1.95;

const markBmi = markWeight / markHeight ** 2;
const johnBmi= johnWeight / johnHeight ** 2;
const markHigherBmi= markBmi > johnBmi;

console.log(markBmi,johnBmi,markHigherBmi);

if(markBmi>johnBmi){
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);

const guyWeight = 77;

if(guyWeight > 80){
    console.log(`Weight of ${guyWeight} is dangerous. Please start a diet`)
} else {
    console.log(`Weight of ${guyWeight} is perfectly fine. Well done!`);
}
}
