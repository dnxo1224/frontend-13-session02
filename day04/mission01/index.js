let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

// parseInt(num1.value);
// parseInt(num2.value);

function add() {
  const value1 = parseInt(num1.value);
  const value2 = parseInt(num2.value);

  if (isNaN(value1) || isNaN(value2)) {
    result.textContent = "Not a Number!";
  } else {
    let sum = value1 + value2;
    result.textContent = sum;
  }
}

document.getElementById("num2").addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    add();
  }
});
