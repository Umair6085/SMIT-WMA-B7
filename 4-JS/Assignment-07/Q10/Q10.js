// 10. Write a js program to input the month number and print the number of days in that month.

let num = prompt('Enter A Month Number :');

if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {

    alert("31 Days In This Month")
    console.log("31 Days In This Month")

} else if (num == 4 || num == 6 || num == 9 || num == 11) {
    
    alert("30 Days In This Month")
    console.log("30 Days In This Month")

}
else if (num == 2){

    alert("28 Days In This Month")
    console.log("28 Days In This Month")

}
else{

    alert("Enter Valid Month Number")
    console.log("Enter Valid Month Number")

}