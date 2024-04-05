// 13. Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basicSalary = Number(prompt('Enter Your Basic Salary :'));
let hra, da;

if (basicSalary <= 10000) {

    hra = basicSalary * 0.2;
    da = basicSalary * 0.8;

} else if (basicSalary <= 20000) {

    hra = basicSalary * 0.25;
    da = basicSalary * 0.9;

} else {

    hra = basicSalary * 0.3;
    da = basicSalary * 0.95;
    
}

let grossSalary = basicSalary + hra + da;

alert('Gross Salary: ' + grossSalary);
console.log('Gross Salary: ' + grossSalary);
