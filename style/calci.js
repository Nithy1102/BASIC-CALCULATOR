const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const display = document.getElementById("calcDisplay");


toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  toggleBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});


window.addEventListener("DOMContentLoaded", () => {
  const isDark = body.classList.contains("dark");
  toggleBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';


  document.querySelectorAll(".calc button").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.textContent;

      if (val === "C") {
        clearDisplay();
      } else if (val === "←") {
        display.value = display.value.slice(0, -1);
      } else if (val === "=") {
        calculate();
      } else if (val === "±") {
        toggleSign();
      } else {
        appendValue(val);
      }
    });
  });
});


function appendValue(val) {
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}


function clearDisplay() {
  display.value = "0";
}


function toggleSign() {
  if (display.value !== "0") {
    display.value = String(parseFloat(display.value) * -1);
  }
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
