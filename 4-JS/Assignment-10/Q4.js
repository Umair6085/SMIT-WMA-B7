
// Question 4 (Object Iteration)


// Task 1

const myObject = {
    name: "Ali Umair",
    age: 20,
    city: "Faisalabad",
    isHappy: true
};

for (const property in myObject) {
console.log(`${property}: ${myObject[property]}`);
}


// Task 2

for (const property in myObject) {
    if (Object.values(myObject)) {
    // Perform specific actions based on property and its value
    console.log(`Property: ${property}, Value: ${myObject[property]}`);

    switch (typeof myObject[property]) {
        case 'string':
        console.log(" - This is a string property.");
        break;
        case 'number':
        console.log(" - This is a number property.");
        // Do something with the number (e.g., calculation)
        break;
        case 'boolean':
        console.log(" - This is a boolean property.");
        // Make a decision based on the boolean value
        break;
        // Add more cases for other data types if needed
    }
    }
}