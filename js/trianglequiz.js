const inputs = document.querySelectorAll(".questions .question");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-score");

function checkTriangleQuiz() {
  showOutput();

  var checkedCount = countCheckedElements();

  if (checkedCount < 10) {
    output.innerText = "Please solve all the questions in the Quiz!!";
  } else if (checkedCount === 10) {
    calculateQuizScore();
  }
}

const QuizAnswers = [
  "Scalene",
  "Equilateral",
  "5cm",
  "yes",
  "no",
  "yes",
  "20deg",
  "45deg",
  "30",
  "side CA",
];

function calculateQuizScore() {
  var score = 0;
  var index = 0;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      if (inputs[i].value === QuizAnswers[index]) {
        score++;
      }
      index++;
    }
  }

  output.innerHTML =
    "<p> Your total score: " +
    score +
    "<br> No of Correct Answers: " +
    score +
    "<br>No of Incorrect Answers: " +
    (10 - score) +
    "</p>";
}

function countCheckedElements() {
  var checkedCount = 0;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      checkedCount++;
    }
  }
  return checkedCount;
}

function showOutput() {
  output.style.display = "block";
}

submitBtn.addEventListener("click", checkTriangleQuiz);
