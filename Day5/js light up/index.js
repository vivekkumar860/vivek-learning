/* Here you have to add a keydown event listener on window so that you can get 
information of which key is pressed and build logic around it.
Then you have to build logic such that, Each key press changes the color of its
corrosponsing letter ('letters are inside span tags, having class .letter').
Change it to the color provided below. 

Important ID(s): container's (div) id = 'container'
Important Class(s): class for span tags containing letters = 'letter' */
const COLOR = "rgb(128, 128, 255)";

/* code from here */

const container = document.getElementById("container");
const letters = container.querySelectorAll(".letter");

window.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase(); // Get the pressed key in lowercase

  letters.forEach((letter) => {
    const letterText = letter.textContent.toLowerCase();
    if (letterText === pressedKey) {
      letter.style.color = COLOR; // Change the color of the matching letter
    } else {
      letter.style.color = ""; // Reset the color of other letters
    }
  });
});
/* to here */
