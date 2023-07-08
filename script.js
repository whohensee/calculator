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
// const operatorRegEx = /[+|-|x|/]/;
const operatorRegEx = /[x+/-]/;
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

function parseDisplayString(str) {
  // maybe eventually add if statement for search finds nothing
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
addToDisplay("2");
addToDisplay(" - ");
addToDisplay("7");
addToDisplay(" + ");
addToDisplay("3");
console.log(parseDisplayString(displayStr));
console.log(operatorRegEx.toString())
