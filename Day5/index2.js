// Select the button and span elements
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterSpan = document.getElementById("counter");

let counter = 0; // Initialize the counter

// Add event listener to increment button
incrementButton.addEventListener("click", () => {
  counter++;
  counterSpan.textContent = counter;
});

// Add event listener to decrement button
decrementButton.addEventListener("click", () => {
  counter--;
  counterSpan.textContent = counter;
});
