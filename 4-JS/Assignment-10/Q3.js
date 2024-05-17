
/* Question 3 (Object Methods) */
    

// Task 1 

const obj = {
    printMessage: function(message) {
    console.log(message);
    }
};

obj.printMessage("Hello from the object method!"); // Enter any text in printMessage to console


// Task 2

const calculatorObject = {
    num1: 10,
    num2: 5,

    calculateSum: function() {
    return this.num1 + this.num2;
    },

    calculateProduct: function() {
    return this.num1 * this.num2;
    },

    calculateDifference: function() {
    return this.num1 - this.num2;
    }
};

const sumResult = calculatorObject.calculateSum();
console.log("Sum:", sumResult); 

const productResult = calculatorObject.calculateProduct();
console.log("Product:", productResult); 

const differenceResult = calculatorObject.calculateDifference();
console.log("Difference:", differenceResult); 