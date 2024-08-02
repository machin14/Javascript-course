const markWeight = 78;
const markHeight = 1.69;
const johnWeight= 92;
const johnHeight = 1.95;

const markBmi = markWeight / markHeight ** 2;
const johnBmi= johnWeight / johnHeight ** 2;
const markHigherBmi= markBmi > johnBmi;

console.log(markBmi,johnBmi,markHigherBmi);