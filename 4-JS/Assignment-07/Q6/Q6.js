// 6. Write a js program to check whether a year is leap year or not.

let year = prompt('Enter Year :');

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(`It's a Leap Year`);
            console.log(`It's a Leap Year`);
        } else {
            alert(`Not a Leap Year`);
            console.log(`Not a Leap Year`);
        }
    } else {
        alert(`It's a Leap Year`);
        console.log(`It's a Leap Year`);
    }
} else {
    alert(`Not a Leap Year`);
    console.log(`Not a Leap Year`);
}
