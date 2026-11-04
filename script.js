// ==========================
// Part 1: Date Display
// ==========================

// Get the current date
let today = new Date();
let month = today.getMonth() + 1; // months start at 0
let day = today.getDate();
let year = today.getFullYear();

// Add leading zeros to month and day
let monthText = String(month).padStart(2, "0");
let dayText = String(day).padStart(2, "0");

// Build the date message and show it on the page
let dateMessage = "Today is " + monthText + "/" + dayText + "/" + year;
document.getElementById("dateOutput").innerHTML = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Starting string values
let valueOne = "250";
let valueTwo = "3.14";
let valueThree = "drift";
let valueFour = "16";

// Convert each value to a number
let convertedOne = Number(valueOne);
let convertedTwo = Number(valueTwo);
let convertedThree = Number(valueThree);
let convertedFour = Number(valueFour);

// Build a sentence for each value
let resultOne = "<p>Original: '" + valueOne + "' -> Converted: " + convertedOne +
  " -> isNaN: " + Number.isNaN(convertedOne) +
  " -> isInteger: " + Number.isInteger(convertedOne) + "</p>";

let resultTwo = "<p>Original: '" + valueTwo + "' -> Converted: " + convertedTwo +
  " -> isNaN: " + Number.isNaN(convertedTwo) +
  " -> isInteger: " + Number.isInteger(convertedTwo) + "</p>";

let resultThree = "<p>Original: '" + valueThree + "' -> Converted: " + convertedThree +
  " -> isNaN: " + Number.isNaN(convertedThree) +
  " -> isInteger: " + Number.isInteger(convertedThree) + "</p>";

let resultFour = "<p>Original: '" + valueFour + "' -> Converted: " + convertedFour +
  " -> isNaN: " + Number.isNaN(convertedFour) +
  " -> isInteger: " + Number.isInteger(convertedFour) + "</p>";

// Combine the results and show them on the page
let conversionResults = resultOne + resultTwo + resultThree + resultFour;
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Grade scores
let scoreOne = 88;
let scoreTwo = 92.5;
let scoreThree = 79;

// Calculations
let totalScore = scoreOne + scoreTwo + scoreThree;
let averageScore = totalScore / 3;
let scoreDifference = scoreTwo - scoreThree;

// Build the results and show them on the page
let mathResults = "<p>Scores: " + scoreOne + ", " + scoreTwo + ", " + scoreThree + "</p>" +
  "<p>Total score: " + totalScore + "</p>" +
  "<p>Average score: " + averageScore.toFixed(2) + "</p>" +
  "<p>Difference between highest and lowest score: " + scoreDifference + "</p>";
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// Check if the third value is a valid number
let nanMessage = "";
if (Number.isNaN(convertedThree)) {
  nanMessage = "<p>'" + valueThree + "' is not a valid number.</p>";
} else {
  nanMessage = "<p>'" + valueThree + "' is a valid number.</p>";
}
document.getElementById("numberConversionOutput").innerHTML += nanMessage;

// Check if the average is passing
let passMessage = "";
if (averageScore >= 70) {
  passMessage = "<p>Result: Passing</p>";
} else {
  passMessage = "<p>Result: Not passing</p>";
}
document.getElementById("mathOutput").innerHTML += passMessage;
