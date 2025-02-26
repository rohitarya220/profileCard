// iife to check if dark mode is enabled
(function () {
  document.documentElement.classList.toggle("dark", localStorage.getItem("darkMode") === "enabled");
})();

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleButton"); 
  const circle = document.getElementById("toggleCircle"); 

  // if dark mode is enabled and update the toggle position
  const isDark = document.documentElement.classList.contains("dark");
  circle.classList.toggle("translate-x-5", isDark);

  // Toggle dark mode on button click
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); 
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark") ? "enabled" : "");
    circle.classList.toggle("translate-x-5"); 
  });
});

