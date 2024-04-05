// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

let num = prompt('Enter Number :');

if (num % 5 == 0 && num % 11 == 0) {
    alert(`Number is Divisible by 5 and 11`);
    console.log(`Number is Divisible by 5 and 11`);
}
else{
    alert(`Number is Not Divisible by 5 and 11`);
    console.log(`Number is Not Divisible by 5 and 11`);
}