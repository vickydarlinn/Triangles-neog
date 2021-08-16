"use strict";
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const checker = document.querySelector("._isTriangle");
const output = document.querySelector(".output");
const clearscreen = document.querySelector(".clearScreen");
clear();
// is it triangle or not checker!
function validTriangleChecker() {
  const input1angle = Number(input1.value);
  const input2angle = Number(input2.value);
  const input3angle = Number(input3.value);
  const sum = input1angle + input2angle + input3angle;
  if (sum === 180 && input1angle > 0 && input2angle > 0 && input3angle > 0) {
    trueTriangle();
  } else {
    falseTriangle();
  }
}
// reaction for right and wrong answer
function trueTriangle() {
  output.textContent = "yap..It is triangle!";
  output.style.fontSize = "3.6rem";
  output.style.fontWeight = "700";
  output.style.color = "#2D2424";
  document.querySelector("body").style.backgroundColor = "#5CFF5C";
}
function falseTriangle() {
  document.querySelector("body").style.backgroundColor = "#FF5C5C";
  output.textContent = "Not a triangle";
  output.style.fontSize = "3.6rem";
  output.style.fontWeight = "700";
  output.style.color = "white";
}
// after refreshing screen input values will become empty
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
