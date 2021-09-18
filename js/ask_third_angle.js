"use strict";
const angle1st = document.querySelector(".angle1st");
const angle2nd = document.querySelector(".angle2nd");
const userAngle = document.querySelector(".userAngle");
const checker = document.querySelector(".checker");
const playAgain = document.querySelector(".playAgain");
const output = document.querySelector(".output");

let max = 180;
let angle1;
let angle2;
let angle3;

// angle maker/ //////////////////
function randomDegreeGenerator() {
  // 1st angle maker
  angle1 = Math.floor(Math.random() * max);
  angle1st.textContent = "1st angle = " + angle1;

  //   2nd angle Maker
  max = max - angle1;
  angle2 = Math.floor(Math.random() * max);
  angle2nd.textContent = "2nd angle = " + angle2;

  //   3rd angle Maker
  angle3 = 180 - (angle1 + angle2);
}

// user answer checker
function userAnswerChecker() {
  const userAnswer = Number(document.querySelector(".userAngle").value);

  if (userAnswer === angle3) {
    console.log("ryt ans");
    rightAns();
  } else {
    console.log("wrong ans");
    wrongAns();
  }
}
// right display outputs
function rightAns() {
  document.querySelector("body").style.backgroundColor = "#5CFF5C";
  output.textContent = "Right Answer";

  output.style.fontSize = "3.6rem";
  output.style.fontWeight = "700";
  output.style.color = "#2D2424";
}
// wrong display output
function wrongAns() {
  document.querySelector("body").style.backgroundColor = "#FF5C5C";
  output.textContent = "wrong Ans!..Right answer is " + angle3 + " deg";
  output.style.fontSize = "3.6rem";
  output.style.fontWeight = "700";
  output.style.color = "white";
}

// play again////
playAgain.addEventListener("click", function () {
  document.location.reload();
});

randomDegreeGenerator();
console.log(angle3);
checker.addEventListener("click", userAnswerChecker);
