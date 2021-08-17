"use strict";
const angle1input = document.querySelector(".angle1");
const angle2input = document.querySelector(".angle2");
const angle3input = document.querySelector(".angle3");
const checker = document.querySelector(".checker");

let max = 180;
let angle1;
let angle2;
let angle3;
let ans;
let userans;

// angle maker///////////////////
function randomDegreeGenerator() {
  // 1st angle maker
  angle1 = Math.floor(Math.random() * max);
  angle1input.textContent = "1st angle = " + angle1;

  //   2nd angle Maker
  max = max - angle1;
  angle2 = Math.floor(Math.random() * max);
  angle2input.textContent = "2nd angle = " + angle2;

  //   3rd angle Maker
  angle3 = 180 - (angle1 + angle2);
  angle3input.textContent = "3rd angle = " + angle3;
}

// Angle decision maker
function triangleCategory() {
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    ans = "acute";
  } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    ans = "right";
  } else if (angle1 >= 90 || angle2 >= 90 || angle3 >= 90) {
    ans = "obtuse";
  }
}

// user anser checker
function userAnserChecker() {
  userans = document.querySelector(
    'input[name="which_triangle"]:checked'
  ).value;
  console.log(userans);
  if (userans === ans) {
    rightAns();
  } else if (userans != ans) {
    wrongAns();
  }
}

// right display output
function rightAns() {
  document.querySelector("body").style.backgroundColor = "green";
  console.log("right ans");
}
// wrong display output
function wrongAns() {
  document.querySelector("body").style.backgroundColor = "red";
  console.log("wrong ans!..right answer is " + ans + " angled triangle.");
}

randomDegreeGenerator();
triangleCategory();

checker.addEventListener("click", userAnserChecker);
