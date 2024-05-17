
// Question 5 (Object Comparison)


// Task 1

function areObjectsEqual(myObj1, myObj2) {
    return JSON.stringify(myObj1) === JSON.stringify(myObj2);
}

const myObj1 = { name: "Alice", age: 30 };
const myObj2 = { name: "Alice", age: 30 };

console.log(areObjectsEqual(obj1, obj2)); // returns true if equal and returns false if not equal


// Task 2

        const obj1 = { name: "Alice", age: 30 };
const obj2 = obj1; // Reference assignment
const obj3 = { name: "Alice", age: 30 }; // Different object

function areObjectsSameReference(obj1, obj2) {
    return obj1 === obj2;  // Assigned obj1 to obj2
}  

console.log(areObjectsSameReference(obj1, obj2)); // returns true because obj1 and obj2 are same object
console.log(areObjectsSameReference(obj1, obj3)); // returns false because obj1 and obj2 are different object