
// Question 2 (Object Properties)

    
let obj = {
    name: "Umair",
    age: 20,
    profession: "Software Engineer"
}

console.log(Object.values(obj));   // Before Changing the profession 

obj.profession = "Student"

console.log(Object.values(obj)); // After Changing the profession

obj.nationality = "Pakistani" // Adding new property to the obj

console.log(obj);