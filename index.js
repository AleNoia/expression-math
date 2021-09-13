// Imports and variables main
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const expression = String;

// Functions
// Verifying expression characters
function verifyExpression(expression) {
  if (expression.includes("^")) {
    return expression.replace("^", "**");
  }
  return expression;
}

// Calculating the expression sent by the user
function calc(expression) {
  return console.log("The result is ", eval(expression));
}

// Verifying if the user want to close or not the application
function closeAplication() {
  rl.question("Você deseja continuar? [y/n] ", function (value) {
    if (value == "y") {
      start();
    } else {
      rl.close();
    }
  });
}

// Expression to start the application
function start() {
  rl.question("Insert the expression math: ", function (expression) {
    try {
      calc(verifyExpression(expression));
      closeAplication();
    } catch (err) {
      console.error("An error occurred in the application: ", err);
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
