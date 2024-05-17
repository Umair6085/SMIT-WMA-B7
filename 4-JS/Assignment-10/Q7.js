
// Question 7 (Object Prototypes)

// Task 1

// Define the Prototype Object

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.start = function() {
    console.log(`${this.year} ${this.make} ${this.model} started!`);
};

Car.prototype.drive = function() {
    console.log(`${this.year} ${this.make} ${this.model} is being driven.`);
};

//   Create Object Instances

const car1 = new Car("Toyota", "Camry", 2023);
const car2 = new Car("Honda", "Civic", 2024);
const car3 = new Car("Ford", "Mustang", 2022);

// Use the Object Instances

console.log("\nBefore adding new prototype")
car1.start();  
car2.drive();  
car3.start(); 


// Task 2


// Add a Method to the Prototype

Car.prototype.stop = function() {
    console.log(`${this.year} ${this.make} ${this.model} stopped.`);
};

// Use the New Method

console.log("\nAfter adding new prototype")
car1.start();  
car2.drive();  
car3.stop();   