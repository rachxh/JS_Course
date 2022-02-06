// let form = document.querySelector("form");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
// let direction = document.querySelectorAll(".direction");

const setGradient = (directionValue) => {
  // let selectedValue;
  // for (const sel of direction) {
  //   if (sel.onclick) {
  //     selectedValue = sel.value;
  //   }
  // }
  // console.log(direction);
  // console.log(direction[0].value);
  console.log(color1.value);
  console.log(color2.value);
  // console.log(selectedValue);

  //   solution 1:
  //   document.body.style.backgroundImage = "linear-gradient(" + color1.value + "," + color2.value + ")";
  //solution2:
  // document.querySelector(
  //   "#display"
  // ).style.backgroundImage = `linear-gradient(${directionValue},${color1.value},${color2.value})`;
};

// form.addEventListener("click", setGradient);
