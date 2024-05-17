
// Question 10 (Object Property Enumeration)


const person = {
    firstName: "Muhammad",
    lastName: "Umair",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Faisalabad"
    }
};

const propertyNames = Object.keys(person);
console.log(propertyNames); 