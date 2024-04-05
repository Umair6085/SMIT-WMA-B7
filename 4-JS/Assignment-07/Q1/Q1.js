// 1. Write a js program to find the maximum between two numbers.

let num1 = prompt('Enter Number 1 :');
let num2 = prompt('Enter Number 2 :');

if (num1 > num2) {
    alert(`Maximum number is num1 which is ${num1}`);
    console.log(`Maximum number is num1 which is ${num1}`);
    
} else if (num1 < num2) {
    alert(`Maximum number is num2 which is ${num2}`);
    console.log(`Maximum number is num2 which is ${num2}`)
    
}
else{
    alert(`The numbers are equal`);
    console.log(`The numbers are equal`)
}