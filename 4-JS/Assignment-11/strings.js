// String and its Methods

// Accessing Characters and Length

const str = "Hello, World!";

console.log(str.length);       // 13 (length of the string)
console.log(str[0]);          // 'H' (accessing first character)
console.log(str.charAt(7));    // 'W' (accessing character at index 7)


// Finding and Replacing Substrings


console.log(str.indexOf("World"));  // 7 (index of "World")
console.log(str.lastIndexOf("l"));  // 10 (last index of "l")
console.log(str.includes("Hello")); // true (checks if string includes substring)

const newStr = str.replace("World", "Universe");
console.log(newStr);              // Hello, Universe! (replaces first occurrence)

const newStr2 = str.replaceAll("l", "L");
console.log(newStr2);             // HeLLo, WorLd! (replaces all occurrences)


// Case Conversion

console.log(str.toUpperCase());     // HELLO, WORLD!
console.log(str.toLowerCase());     // hello, world!


// Slicing and Extracting Substrings

console.log(str.slice(7, 12));      // World (extracts from index 7 to 11)
console.log(str.substring(0, 5));  // Hello (same as slice, but handles negative indices differently)


// Concatenation and Trimming

const str2 = "JavaScript";
const combinedStr = str.concat(" ", str2);  // Hello, World! JavaScript
console.log(combinedStr);

const str3 = "   Spaces   ";
console.log(str3.trim());         // Spaces (removes leading/trailing whitespace)
console.log(str3.trimStart());    // Spaces   (removes only leading whitespace)
console.log(str3.trimEnd());      //    Spaces (removes only trailing whitespace)


// Splitting and Joining

const words = str.split(",");      // ["Hello", " World!"] (splits into array based on separator)
const joinedStr = words.join("-");  // Hello- World! (joins array elements with separator)
console.log(joinedStr);


// Padding

const str4 = "5";
console.log(str4.padStart(3, "0"));  // 005 (pads start with "0" to length 3)
console.log(str4.padEnd(3, "*"));    // 5** (pads end with "*" to length 3)

