// // 11. Write a js program to count a minimum number of notes in a given amount.

// let amount = prompt('Enter an Amount:');

// amount = Number(amount);

// let denominations = [5000, 1000, 500, 100, 50, ,20, 10, 5, 2, 1];
// let notes = Array(denominations.length).fill(0);

// for (let i = 0; i < denominations.length; i++) {
//     if (amount >= denominations[i]) {
//         notes[i] = Math.floor(amount / denominations[i]);
//         amount = amount - denominations[i] * notes[i];
//     }
// }

// alert('Minimum number of notes:');
// for (let i = 0; i < denominations.length; i++) {
//     if (notes[i] !== 0) {
//         alert(denominations[i] + ': ' + notes[i]);
//     }
// }

let amount = Number(prompt('Enter the amount:'));

let notes = 0;

if (amount >= 5000) {
    notes += Math.floor(amount / 5000);
    amount %= 5000;
    amount = amount % 5000;
}

if (amount >= 1000) {
    notes += Math.floor(amount / 1000);
    amount %= 1000;
}

if (amount >= 500) {
    notes += Math.floor(amount / 500);
    amount %= 500;
}

if (amount >= 100) {
    notes += Math.floor(amount / 100);
    amount %= 100;
}

if (amount >= 50) {
    notes += Math.floor(amount / 50);
    amount %= 50;
}

if (amount >= 10) {
    notes += Math.floor(amount / 10);
    amount %= 10;
}

if (amount >= 5) {
    notes += Math.floor(amount / 5);
    amount %= 5;
}

if (amount >= 2) {
    notes += Math.floor(amount / 2);
    amount %= 2;
}

if (amount >= 1) {
    notes += amount;
}

alert('Minimum number of notes: ' + notes);
console.log('Minimum number of notes: ' + notes);
