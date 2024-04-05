// 2. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F 


let num1 = Number(prompt('Enter Your Physics Marks :'));
let num2 = Number(prompt('Enter Your Chemistry Marks :'));
let num3 = Number(prompt('Enter Your Biology Marks :'));
let num4 = Number(prompt('Enter Your Mathematics Marks :'));
let num5 = Number(prompt('Enter Your Computer Marks :'));


let totalMarks = num1 + num2 + num3 + num4 + num5;
let percentage = (totalMarks * 100) / 500;

if (percentage >= 90) {

        alert(`Percentage: ${percentage} Grade: A`)
        console.log(`Percentage: ${percentage} Grade: A`)
    } 
    else if (percentage >= 80) {
        
        alert(`Percentage: ${percentage} Grade: B`)
        console.log(`Percentage: ${percentage} Grade: B`)

    } else if (percentage >= 70) {

        alert(`Percentage: ${percentage} Grade: C`)
        console.log(`Percentage: ${percentage} Grade: C`)     

    } else if (percentage >= 60) {

        alert(`Percentage: ${percentage} Grade: D`)
        console.log(`Percentage: ${percentage} Grade: D`)
        
    } else if (percentage >= 40) {

        alert(`Percentage: ${percentage} Grade: E`)
        console.log(`Percentage: ${percentage} Grade: E`)

    } 
else {

    alert(`Percentage: ${percentage} Grade: F`)
    console.log(`Percentage: ${percentage} Grade: F`)

}


