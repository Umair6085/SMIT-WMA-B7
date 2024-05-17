
// Question 12 (Object Privacy)


function Person(name, age) {
    let _name = name; // Private property using closure
    let _age = age;

    // Public methods to access private properties
    this.getName = function() {
    return _name;
    };

    this.getAge = function() {
    return _age;
    };
}

const umair = new Person("Umair", 20);
console.log(umair.getName()); // Output: Umair
console.log(umair._name,"(private property is inaccessible)"); // Output: undefined 