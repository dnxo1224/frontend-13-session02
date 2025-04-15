let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

function numCheck() {
  const value1 = parseInt(num1.value);
  const value2 = parseInt(num2.value);

  if (isNaN(value1) || isNaN(value2)) {
    result.textContent = "Not a Number!";
  } else {
    return true;
  }
}

function add() {
  if (numCheck() == true) {
    let sum = parseInt(num1.value) + parseInt(num2.value);
    result.textContent = sum;
  } else {
    numCheck();
  }
}

function sub() {
  if (numCheck() == true) {
    let sub = parseInt(num1.value) - parseInt(num2.value);
    result.textContent = sub;
  } else {
    numCheck();
  }
}

function mult() {
  if (numCheck() == true) {
    let mult = parseInt(num1.value) * parseInt(num2.value);
    result.textContent = mult;
  } else {
    numCheck();
  }
}

function divide() {
  if (numCheck() == true) {
    let divide = parseInt(num1.value) / parseInt(num2.value);
    result.textContent = divide;
  } else {
    numCheck();
  }
}
