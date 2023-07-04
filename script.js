"use strict";

// ----- Basic Computation Functions ----- //

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// ----- Calculator Operation Code ----- //

let calcLHS = null;
let calcRHS = null;
let calcOperator = null;

function operate(lhs, rhs, operator) {
  let result = null;
  switch (operator) {
    case "+":
      result = add(lhs, rhs);
      break;
    case "-":
      result = subtract(lhs, rhs);
      break;
    case "*":
      result = multiply(lhs, rhs);
      break;
    case "/":
      result = divide(lhs, rhs);
      break;
  }
  return result;
}

// ----- Testing Area ----- //
console.log(operate(15,6, "/"));
