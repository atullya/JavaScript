// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  let display = document.getElementById("display");
  let clearAll = document.getElementById("clearDisplay");
  let operator = document.querySelectorAll(".operator");
  let backSpace = document.getElementById("backSpace");
  let digit = document.querySelectorAll(".digit");
  let percentage = document.getElementById("percentage");
  let calculate = document.getElementById("calculateResult");

  // Adding click event listeners to operator and digit buttons
  operator.forEach(dataValue);
  digit.forEach(dataValue);

  // Adding click event listeners to other buttons
  percentage.addEventListener("click", percent);
  backSpace.addEventListener("click", Back);
  clearAll.addEventListener("click", clearDisplay);
  calculate.addEventListener("click", calculateResult);
});

// Function to handle click events for operator and digit buttons
const dataValue = (button) => {
  button.addEventListener("click", function () {
    appendDisplay(button.getAttribute("data-value"));
  });
};

// Function to append values to the display
const appendDisplay = (value) => {
  display.value += value;
};

// Function to calculate percentage
const percent = () => {
  display.value = eval(display.value) / 100;
};

// Function to handle backspace
const Back = () => {
  display.value = display.value.slice(0, -1);
};

// Function to clear the display
const clearDisplay = () => {
  display.value = "";
};

// Function to calculate the result
const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
let c = 0;
let str = "atullya";
let n = str.length;

console.log(n);

for (let i = 0; i < n; i++) {
  if ("aeiou".includes(str[i])) {
    c++;
  }
}

console.log("Total number of vowels: " + c);
