const base = document.querySelector("#baseOfTriangle");
const height = document.querySelector("#heightOfTriangle");
const output = document.querySelector(".hypotenuseOutput");
const checker = document.querySelector(".hypotenuseChecker");
clearscreen();

// checking sides of triangle
function sidechecker() {
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);
  if (baseValue > 0 && heightValue > 0) hypotenuseCalculator();
  else invalidValue();

  // wrong side output
  function invalidValue() {
    output.textContent = "Please write proper values!";
  }
  // rightside output
  function hypotenuseCalculator() {
    const hypotenuse = (baseValue ** 2 + heightValue ** 2) ** (1 / 2);
    output.textContent = "Hypotenuse(c) of triangle is = " + hypotenuse;
  }
}
// after refreshing the screen values got cleared.
function clearscreen() {
  base.value = "";
  height.value = "";
}
// event happens when click on check hypotenuse
checker.addEventListener("click", sidechecker);
