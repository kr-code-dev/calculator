// grabbing all the elements that we need to work with.
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

// adding function to add button.
add.addEventListener("click", function () {
  const a = Number(firstNumber.value);
  const b = Number(secondNumber.value);
  if (firstNumber.value === "" || secondNumber.value === "") {
    result.textContent = "Please enter both numbers.";
  } 
  else {
    result.textContent = a + b;
  }
});
// adding function to subtract button.
subtract.addEventListener("click", function () {
  const a = Number(firstNumber.value);
  const b = Number(secondNumber.value);
  if (firstNumber.value === "" || secondNumber.value === ""){
    result.textContent = "Please enter both numbers.";
  }
  else {
    result.textContent = a - b;
  }
});
// adding function to multiply button.
multiply.addEventListener("click", function () {
  const a = Number(firstNumber.value);
  const b = Number(secondNumber.value);
  if (firstNumber.value === "" || secondNumber.value === ""){
    result.textContent = "Please enter both numbers.";
  }
  else {
    result.textContent = a * b;
  }
});
// adding function to divide button.
divide.addEventListener("click", function () {
  const a = Number(firstNumber.value);
  const b = Number(secondNumber.value);

  // Checking if both inputs have values.
  if (firstNumber.value === "" || secondNumber.value === "") {
    result.textContent = "Please enter both numbers.";
  }
  // Checking for division by zero.
  else if (b === 0) {
    result.textContent = "Cannot divide by zero!";
  } else {
    result.textContent = a / b;
  }
});

// adding function to clear button.
clear.addEventListener("click", function () {
  firstNumber.value = "";
  secondNumber.value = "";
  result.textContent = "";
});
