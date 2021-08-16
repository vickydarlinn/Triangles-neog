"use strict";
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const checker = document.querySelector("._isTriangle");
const clearscreen = document.querySelector(".clearScreen");
clear();

function validTriangleChecker() {
  const input1angle = Number(input1.value);
  const input2angle = Number(input2.value);
  const input3angle = Number(input3.value);
  const sum = input1angle + input2angle + input3angle;
  if (sum === 180 && input1angle > 0 && input2angle > 0 && input3angle > 0) {
    console.log("It is triangle");
    trueTriangle();
    clearscreen();
  } else {
    console.log("nope a triangle");
    falseTriangle();
  }
}
function trueTriangle() {
  document.querySelector("body").style.backgroundColor = "green";
}
function falseTriangle() {
  document.querySelector("body").style.backgroundColor = "red";
}
function clear() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  document.querySelector("body").style.backgroundColor = "white";
}
// for output
checker.addEventListener("click", validTriangleChecker);

// for default screen
clearscreen.addEventListener("click", clear);
