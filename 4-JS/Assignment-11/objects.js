// Object and its Methods 


// Creating and Accessing Properties

const person = {
    firstName: "Muhammad",
    lastName: "Umair",
    age: 20
};

// Accessing properties
console.log(person.firstName);     // "Muhammad"
console.log(person["lastName"]);  // "Umair"

// Adding/modifying properties
person.age = 21;
person.city = "Faisalabad";



//   Checking Property Existence

console.log("age" in person);      // true
console.log(person.hasOwnProperty("city")); // true (checks if the property is on the object itself)


// Object.keys(), Object.values(), Object.entries()

console.log(Object.keys(person));      // ["firstName", "lastName", "age", "city"]
console.log(Object.values(person));    // ["Muhammad", "Umair", 21, "Faisalabad"]
console.log(Object.entries(person));    // [["firstName", "Muhammad"], ["lastName", "Umair"], ["age", 21], ["city", "Faisalabad"]]


// Object.assign() (Shallow Copy)

const person2 = Object.assign({}, person);  
person2.age = 35;
console.log(person.age);  // 21 (Original object remains unchanged)
console.log(person2.age); // 35


// Object.freeze() and Object.seal()

Object.freeze(person); // Prevents adding, deleting, or modifying properties
person.age = 40; // This will have no effect
delete person.firstName; // This will have no effect

const person3 = { name: "Ali" };
Object.seal(person3); // Prevents adding or deleting, but allows modifying existing properties
person3.name = "Babar"; // This works
person3.age = 25;     // This has no effect
delete person3.name;  // This has no effect
console.log(person3)

// Object.defineProperty() (Fine-grained control)

const obj = {};
Object.defineProperty(obj, "prop1", {
  value: 42,
  writable: false, // Cannot be changed
  enumerable: false, // Not included in Object.keys()
  configurable: false // Cannot be deleted or reconfigured
});

