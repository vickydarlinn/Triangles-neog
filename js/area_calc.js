"use strict";
const base = document.querySelector("#baseOfTriangle");
const height = document.querySelector("#heightOfTriangle");
const output = document.querySelector(".areaOutput");
const checker = document.querySelector(".areaChecker");
clearscreen();

// taking input
function areaCalculator() {
  // taking input
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);

  // process of finding area of triangle

  const areaValue = (1 / 2) * baseValue * heightValue;

  // output
  output.textContent = "The area of triangle is = " + areaValue;
}
// after refreshing the screen values got cleared.
function clearscreen() {
  base.value = "";
  height.value = "";
}
checker.addEventListener("click", areaCalculator);
