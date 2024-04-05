// 8. Write a js program to check whether a character is uppercase or lowercase alphabet.

let char = prompt('Enter Any Character :');

    if (char === char.toUpperCase()) {

        alert(char + " is an Uppercase Alphabet.")
        console.log(char + " is an Uppercase Alphabet.")

    } else if (char === char.toLowerCase()) {

        alert(char + " is a Lowercase Alphabet.")
        console.log(char + " is a Lowercase Alphabet.")

    } else {

        alert(char + " is not an Alphabet.")
        console.log(char + " is not an Alphabet.")
        
    }
