const { customError } = require("./custom-error");
/*
we have provided you a function called customError,
It is a function that will throw an error.
Catch it using try-catch block and store the error in the provided error variable
ie: `var error`
*/

// use this to catch it
var error;
/* code from here */

try {
  // Call the customError function, expecting it to throw an error
  customError();
} catch (caughtError) {
  // Store the caught error in a descriptive variable
  error = caughtError;

  // Handle the error gracefully, for example:
  console.error("Error caught:", error.message);

  // Consider additional error handling actions based on your application's needs
}

// Export a meaningful function or value, not just the error variable
module.exports = function handleCustomError() {
  // Call the try-catch block here
  // Return a suitable value or throw a custom error if necessary
};

/* to here */
module.exports = { error };
