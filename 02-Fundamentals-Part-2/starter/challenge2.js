
/*const bill = 40;
const tip = bill >= 50 && bill<=300 ? bill * 0.15: bill * 0.2;
console.log(`The bill  was ${bill}, the tip was ${tip}, and the total value was ${bill+tip}`);
*/

//Task 1
const bill = prompt("Please enter the bill value")
function calcTip(num){
    if(num >=50 && num <= 300)
        return num * 0.15;
    else{
        return num * 0.2;
    }   
}
const tip = calcTip(bill);
alert(`The tip value is ${tip}`);

//Task 2
const bills = [125,555,44];

//Task 3
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

//Task 4
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(total);

