// Import and variables main
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expression = String;

// Regex tests
let parens = /\(([0-9+\-*/\^ .]+)\)/; // Identifying if have parenthetical
let sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/; // Identifying if have subtraction
let div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/; // Identifying if have division
let add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/; // Identifying if have addition
let mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/; // Identifying if have multiplication
let exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/; // Identifying if have exponentials

// Functions

// Calculating the expression sent by the user
function calculating(expression) {
  if (isNaN(Number(expression))) {
    if (parens.test(expression)) {
      let newExpr = expression.replace(parens, function (match, subExpr) {
        return calculating(subExpr);
      });
      return calculating(newExpr);
    } else if (exp.test(expression)) {
      let newExpr = expression.replace(exp, function (match, base, pow) {
        return Math.pow(Number(base), Number(pow));
      });
      return calculating(newExpr);
    } else if (mul.test(expression)) {
      let newExpr = expression.replace(mul, function (match, a, b) {
        return Number(a) * Number(b);
      });
      return calculating(newExpr);
    } else if (div.test(expression)) {
      let newExpr = expression.replace(div, function (match, a, b) {
        if (b != 0) return Number(a) / Number(b);
        else throw new Error("Division by zero");
      });
      return calculating(newExpr);
    } else if (add.test(expression)) {
      let newExpr = expression.replace(add, function (match, a, b) {
        return Number(a) + Number(b);
      });
      return calculating(newExpr);
    } else if (sub.test(expression)) {
      let newExpr = expression.replace(sub, function (match, a, b) {
        return Number(a) - Number(b);
      });
      return calculating(newExpr);
    } else {
      return "Dont is a expression";
    }
  }
  return Number(expression);
}

// Verifying if the user want to close or not the application
function continueOrNotAplication() {
  rl.question("Do you want to continue? [y/n] ", function (value) {
    if (value == "y") {
      console.log(" ");
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
      console.log("The result of the expression is ", calculating(expression));
      console.log(" ");
      continueOrNotAplication();
    } catch (err) {
      console.log("Same error happened: ", err);
      continueOrNotAplication();
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
