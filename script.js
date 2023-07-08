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
let displayStr = "";
const displayDefaultStr = "lets calculate";
const display = document.querySelector("#calc-display");

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

function addToDisplay(str) {
  if (typeof str !== "string") {
    console.log("ERROR IN addToDisplay");
    return null;
  }

  if (displayStr === displayDefaultStr) {
    displayStr = "";
  }

  displayStr = displayStr.concat(str);
  display.textContent = displayStr;
}

// ----- Testing Area ----- //
// console.log(operate(15, 6, "/"));
console.log(display.textContent);
