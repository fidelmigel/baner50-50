const range = document.getElementById("range");
const afterSection = document.querySelector(".after");

// Function to adjust the after section based on slider value
function updateSlider(value) {
  afterSection.style.clipPath = `inset(0 0 0 ${value}%)`;
}

// Update slider on input (for desktop)
range.addEventListener("input", (e) => {
  updateSlider(e.target.value);
});

// Update slider on touch move (for mobile)
range.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const rect = range.getBoundingClientRect();
  const value = ((touch.clientX - rect.left) / rect.width) * 100;
  range.value = value;
  updateSlider(value);
});

// Set initial value
updateSlider(range.value);
