const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
});
