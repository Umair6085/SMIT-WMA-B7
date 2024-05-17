
// Question 8 (Object Serialization)


// Task 1 & Task 2

const person = {
    firstName: "Muhammad",
    lastName: "Umair",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Faisalabad"
    }
};

// Convert to JSON Format 
const personJSON = JSON.stringify(person);
console.log("\nJSON Format"); 
console.log(personJSON); 

// Convert to Object Format 
const personObject = JSON.parse(personJSON);
console.log("\nObject Format"); 
console.log(personObject);