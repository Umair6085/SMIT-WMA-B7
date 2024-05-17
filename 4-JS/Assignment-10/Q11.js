
// Question 11 (Object Inheritance)


// Parent Object (Constructor Function)
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.drive = function() {
    console.log(`${this.make} ${this.model} is moving!`);
};

// Child Object (Constructor Function)
function Car(make, model, year) {
    Vehicle.call(this, make, model);  // Inherit properties from Vehicle
    this.year = year;
}

Car.prototype = Object.create(Vehicle.prototype);  // Inherit methods
Car.prototype.constructor = Car;  // Fix the constructor property

// Create instances
const myCar = new Car("Toyota", "Camry", 2023);
myCar.drive();