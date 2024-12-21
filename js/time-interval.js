let load = 0; // Starting point for the loading percentage

// Function to run every 100 milliseconds
function increaseLoad() {
  load++; // Increment load by 1 each time

  console.log(load + "%"); // Log the load to the console

  // When load reaches or exceeds 100, stop the interval
  if (load >= 100) {
    console.log(`this is interval id ${intervalID}`);
    clearInterval(intervalID); // Stop the interval
    console.log("Loading complete!");
  }
}

// Call the increaseLoad function every 100 milliseconds
let intervalID = setInterval(increaseLoad, 30);
