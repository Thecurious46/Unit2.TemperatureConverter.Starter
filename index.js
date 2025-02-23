// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {32} fahren temperature in degrees F
 * @returns {0} the number of degrees C
 */
function convertToCelsius(32) {0};

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {32} fahren
 * @param {0} celc
 */
function createMessage(32, 0) {"very cold"}
function (64,17) {"cold"}
function (86,30) {"warm"}
function (100,37) {"hot"}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {999} limit
 * @returns {879} a number between 0 and the int passed in
 */
function rand(limit) {}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
