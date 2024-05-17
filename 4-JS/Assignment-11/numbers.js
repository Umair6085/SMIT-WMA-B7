// Number and its Methods


// Conversion to Other Types 

const num = 123.456;

console.log(num.toString());        // "123.456" (convert to string)
console.log(num.toFixed(2));       // "123.46" (fixed decimal places)
console.log(num.toExponential(2));  // "1.23e+2" (exponential notation)
console.log(parseInt("456abc"));    // 456 (parse integer from string)
console.log(parseFloat("3.14xyz")); // 3.14 (parse float from string)


// Checking Number Properties

console.log(Number.isInteger(num));   // false (check if integer)
console.log(Number.isNaN(NaN));      // true (check if NaN - Not a Number)
console.log(Number.isFinite(Infinity)); // false (check if finite)
console.log(Number.isSafeInteger(1e15)); // false (check if safe integer)


// Basic Arithmetic and Math Functions

const x = 10;
const y = 5;

console.log(x + y);   // 15
console.log(x - y);   // 5
console.log(x * y);   // 50
console.log(x / y);   // 2
console.log(x % y);   // 0 (modulo/remainder)
console.log(x ** y);  // 100000 (exponentiation)


// Number Constants

console.log(Math.PI);        // 3.14159... (pi)
console.log(Math.E);         // 2.71828... (Euler's number)
console.log(Infinity);       // Infinity
console.log(-Infinity);      // -Infinity
console.log(NaN);            // NaN


