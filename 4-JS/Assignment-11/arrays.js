// Array and its Methods

// Adding and Removing Elements

const numbers = [1, 2, 3];

numbers.push(4, 5);     // Add to the end: [1, 2, 3, 4, 5]
numbers.pop();          // Remove from the end: [1, 2, 3, 4]
numbers.unshift(0);     // Add to the beginning: [0, 1, 2, 3, 4]
numbers.shift();        // Remove from the beginning: [1, 2, 3, 4]


// Transforming and Iterating

const doubled = numbers.map(num => num * 2);    // [2, 4, 6, 8]
const filtered = numbers.filter(num => num > 2); // [3, 4]

numbers.forEach(num => console.log(num));        // Prints each number

const sum = numbers.reduce((acc, num) => acc + num, 0); // 10


// Finding Elements

console.log(numbers.includes(3));   // true
console.log(numbers.indexOf(4));    // 3 (index of 4)
console.log(numbers.find(num => num % 2 === 0)); // 2 (first even number)


// Sorting and Reversing

numbers.sort((a, b) => a - b);  // Sort ascending: [1, 2, 3, 4]
numbers.reverse();             // Reverse: [4, 3, 2, 1]


// Converting to Strings

const str = numbers.join(", "); // "1, 2, 3, 4"
console.log(str);


// Combining Arrays

const moreNumbers = [6, 7];
const allNumbers = numbers.concat(moreNumbers); // [1, 2, 3, 4, 6, 7]


// Slicing and Splicing

const sliced = numbers.slice(1, 3);    // [2, 3] (copy from index 1 to 2)
numbers.splice(2, 1, 10, 11);         // Replace 1 element at index 2 with 10 and 11: [1, 2, 10, 11, 4]


// Filling and Creating Arrays

const filled = Array(5).fill(0);       // [0, 0, 0, 0, 0]
const fromRange = Array.from({length: 5}, (_, i) => i + 1); // [1, 2, 3, 4, 5]
const fromString = Array.from("Hello");  // ['H', 'e', 'l', 'l', 'o']

