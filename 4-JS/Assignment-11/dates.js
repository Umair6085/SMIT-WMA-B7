// Date and its Methods


// Creating Date Objects

const now = new Date();                 // Current date and time
const specificDate = new Date("2024-05-17T15:34:00"); // Specific date and time
const customDate = new Date(2023, 11, 25, 10, 30, 0);  // Year, month (0-11), day, hours, minutes, seconds


// Getting Components of a Date

console.log(now.getFullYear());    // 2024
console.log(now.getMonth());       // 4 (May is 0-indexed, so 4 represents May)
console.log(now.getDate());        // 17
console.log(now.getDay());         // 5 (Friday, 0 = Sunday)
console.log(now.getHours());       // 15
console.log(now.getMinutes());     // 34
console.log(now.getSeconds());     // 0
console.log(now.getMilliseconds()); // e.g., 500


// Setting Components of a Date

const dateToModify = new Date();
dateToModify.setFullYear(2025);
dateToModify.setMonth(0);       // January
dateToModify.setDate(1);
console.log(dateToModify); 


// Time Manipulation

console.log(now.getTime());        // Number of milliseconds since January 1, 1970 (Unix timestamp)

const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
const tomorrow = new Date(now.getTime() + oneDay); 
console.log(tomorrow);


// Date Formatting

console.log(now.toDateString());   // "Fri May 17 2024"
console.log(now.toTimeString());   // "15:34:00 GMT+0500 (PKT)"
console.log(now.toISOString());    // "2024-05-17T10:34:00.000Z" (ISO 8601 format)
console.log(now.toLocaleDateString()); // "5/17/2024" (depends on locale)
console.log(now.toLocaleTimeString()); // "3:34:00 PM" (depends on locale)

