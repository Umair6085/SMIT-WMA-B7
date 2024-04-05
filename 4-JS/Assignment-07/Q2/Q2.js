// 2. Write a js program to find the maximum between three numbers.

let num1 = prompt('Enter Number 1 :');
let num2 = prompt('Enter Number 2 :');
let num3 = prompt('Enter Number 3 :');

if (num1 > num2 && num1 > num3) {

    alert(`Maximum is Number1 : ${num1}`);
    console.log(`Maximum is Number1 : ${num1}`);

} else if (num2 > num1 && num2 > num3){
    
    alert(`Maximum is Number2 : ${num2}`);
    console.log(`Maximum is Number2 : ${num2}`);
}
 else if (num3 > num1 && num3 > num2){
    
    alert(`Maximum is Number3 : ${num3}`);
    console.log(`Maximum is Number3 : ${num3}`);
}
else{
    alert(`Numbers are equal`);
    console.log(`Numbers are equal`);
}