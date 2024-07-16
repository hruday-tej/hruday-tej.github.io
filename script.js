function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.previousElementSibling;
      content.classList.toggle("expanded");

      if (content.classList.contains("expanded")) {
        this.textContent = "See less";
      } else {
        this.textContent = "See more";
      }
    });
  });
});
