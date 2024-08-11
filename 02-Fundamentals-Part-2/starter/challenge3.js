//Task 1 and 2
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmi: calcBMI = function(mass, height){
        return mass/(height * height);
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    bmi:  calcBMI = function(mass, height){
        return mass/(height * height);
    }
};

mark.bmi= calcBMI(mark.mass, mark.height);
john.bmi= calcBMI(john.mass, john.height);

//Task 3
if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
}