const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("clear")) {
      currentInput = "";
      display.value = "";
    } 
    else if (button.classList.contains("del")) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }
    else if (button.classList.contains("equal")) {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += button.textContent;
      display.value = currentInput;
    }
  });
});
