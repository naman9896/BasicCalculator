let screen = document.querySelector(".screen");
let screenValue = "";
buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
