const { randomString } = require("./generate-string");
/* Random string is a 'random string' made up of 'random lowercase english characters'
Count number of time 'd' thoccurs in that string and store it in vairable countOfD */

var countOfD = 0;
/* start code here: */
for (let i = 0; i < randomString.length; i++) {
  if (randomString[i] == "d") {
    countOfD++;
  }
}
/* end here */

try {
  module.exports = { randomString, countOfD };
} catch (e) {}
