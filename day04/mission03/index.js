const display = document.getElementById("display");

document.querySelectorAll("#calculator button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear-btn")) {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendValue(value);
    }
  });
});

function appendValue(value) {
  if (value === "÷") value = "/";
  if (value === "×") value = "*";

  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
