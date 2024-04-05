// 14. Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let units = Number(prompt('Enter Electricity Units :'));

let bill;

if (units<= 50) {
    bill = units * 0.50;
} else if (units <= 150) {
    bill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
    bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
    bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

bill = bill + bill * 0.20;

alert('Total Electricity Bill: ' + bill);
console.log('Total Electricity Bill: ' + bill);
