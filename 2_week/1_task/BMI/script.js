const calculate = () => {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value) / 100;

  let answer = document.querySelector("#answer");
  let result = (weight / (height * height)).toFixed(1);

  let text;
  let color;

  if (result <= 18.5) {
    text = `BMI is ${result}- Underweight`;
    color = "warning";
  } else if (result >= 18.5 && result <= 24.9) {
    text = `BMI is ${result}- Normal or healthy weight`;
    color = "normal";
  } else if (result >= 25.0 && result <= 29.9) {
    text = `BMI is ${result}- Pre-obesity`;
  } else if (result >= 30) {
    text = `BMI is ${result}- Over obesity`;
    color = "danger";
  }

  //  result <= 18.5 ? (
  //     text = `BMI is ${result}- Underweight`
  //     color = "warning") :
  //   } else if (result >= 18.5 && result <= 24.9) {
  //     text = `BMI is ${result}- Normal or healthy weight`;
  //     color = "normal";
  //   } else if (result >= 25.0 && result <= 29.9) {
  //     text = `BMI is ${result}- Pre-obesity`;
  //   } else if (result >= 30) {
  //     text = `BMI is ${result}- Over obesity`;
  //     color = "danger";
  //   }
  answer.textContent = text;
  answer.classList.add(color);
};
