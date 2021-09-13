// Import and variables main
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expression = String;
let resultExpression = Number;

// Functions
// Verift if have a division by zero
function divisionByZero() {
  if (resultExpression === Infinity) {
    console.error("You cannot do divisions by zero");
  }
}

// Verifying the expression and the character
function verifyCharacter() {
  if (expression.length === 0) {
    console.error("Insert the expression");
  } else if (expression.includes("^")) {
    expression = expression.replace("^", "**");
  } else if (expression.includes(":")) {
    expression = expression.replace(":", "/");
  }
  return expression;
}

// Calculating the expression sent by the user
function calculating() {
  resultExpression = eval(expression);
  return console.log("The result is ", resultExpression);
}

// Verifying if the user want to close or not the application
function continueOrNotAplication() {
  rl.question("Do you want to continue? [y/n] ", function (value) {
    if (value == "y") {
      start();
    } else {
      rl.close();
    }
  });
}

// Expression to start the application
function start() {
  rl.question("Insert the expression math: ", function (value) {
    try {
      expression = value;
      verifyCharacter();
      divisionByZero();
      calculating();
      continueOrNotAplication();
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
