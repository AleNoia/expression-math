// Imports and variables main
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const expression = String;

// Functions
// Calculating the expression sent by the user
function calc(expression) {
  return console.log("The result is ", eval(expression));
}

// Expression to start the application
function start() {
  rl.question("Insert the expression math: ", function (expression) {
    try {
      calc(expression);
    } catch (err) {
      console.log("An error occurred in the application: ", err);
    }
  });
}

// Expression to finish the application
rl.on("close", function () {
  console.log("Finishing application");
  process.exit(0);
});

// Starting the application
start();
