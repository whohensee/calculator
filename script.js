"use strict";

// ----- Basic Computation Functions ----- //

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

// ----- Calculator Operation Code ----- //

let calcLHS = null;
let calcRHS = null;
let calcOperator = null;
let displayStr = "";
const operatorRegEx = /[x+/]/;  // - is handled separately
const displayDefaultStr = "lets calculate";
const display = document.querySelector("#calc-display");

function operate(arr) {
  let result = null;
  let lhs = arr[0];
  let rhs = arr[1];
  let operator = arr[2];
  if (lhs.search(operatorRegEx) !== -1) {
    lhs = operate(parseDisplayString(lhs));
  }
  if (rhs.search(operatorRegEx) !== -1) {
    rhs = operate(parseDisplayString(rhs));
  } 

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
  return result.toString();
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

function parseDisplayString(str) {
  // maybe eventually add if statement for search finds nothing
  const minusLoc = str.search(/-/g);
  str = str.replace(" - ", " + -");
  const opLoc = str.search(operatorRegEx);
  const lhs = str.slice(0, opLoc - 1);
  const rhs = str.slice(opLoc + 2);
  const operator = str.charAt(opLoc);
  return [lhs, rhs, operator];
}

// ----- Testing Area ----- //
// console.log(operate(15, 6, "/"));
// console.log(display.textContent);
addToDisplay("1");
addToDisplay(" - ");
addToDisplay("2");
addToDisplay(" - ");
addToDisplay("7");
addToDisplay(" + ");
addToDisplay("3");
console.log(parseDisplayString(displayStr));
console.log(operate(parseDisplayString(displayStr)));
