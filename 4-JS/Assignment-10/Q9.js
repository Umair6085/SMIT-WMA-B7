
// Question 9 (Object Destructuring)

const person = {
    firstName: "Muhammad",
    lastName: "Umair",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Faisalabad"
    }
};

// Destructuring - Extract firstName, lastName, and city
const { firstName, lastName, address: { city } } = person;

console.log(firstName,lastName);  
console.log(city);