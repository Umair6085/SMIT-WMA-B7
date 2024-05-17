
// Question 6 (Object Nesting)

// Task 1
const address = {
    street: "123 Main St",
    city: "Faisalabad",
    state: "Punjab",
    zipCode: "36000"
};

const person = {
    firstName: "Muhammad",
    lastName: "Umair",
    age: 20,
    address: address  // Embedding the address object as a property
};

console.log(person); 


// Task 2

// Access and Change the city
person.address.city = "Lahore";
console.log(person.address.city);

// Access and Change the street
person.address.street = "456 Main St";
console.log(person.address.street); 