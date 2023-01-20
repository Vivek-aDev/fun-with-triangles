const inputs = document.querySelectorAll(".angle-input");
const checkTraiangle = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function validateTriangle() {
  const sum = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    output.innerText = "Congrats...! It forms a Triangle 🔺";
  } else {
    output.innerText = "oops...! It is not a Triangle 😒";
  }
}

checkTraiangle.addEventListener("click", validateTriangle);
