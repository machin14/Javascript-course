//Task 1
const bills = [22,295,176,440,37,105,10,1100,86,52];
//Task 2
const tips = [];
const totals = [];

const calcTip = function(num){
    if(num >=50 && num <= 300)
        return num * 0.15;
    else{
        return num * 0.2;
    }   
}

//Task 3
for(let i = 0; i< bills.length ; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}
console.log(bills,tips, totals);

//Task 4 - BONUS
const calcAverage = function(arr){
let sum = 0;
for(i = 0; i<arr.length; i++){
    sum += arr[i];
}
return sum/arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
