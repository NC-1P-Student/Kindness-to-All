document.addEventListener("DOMContentLoaded", () => {
  const navigationLinks = document.querySelectorAll('a[href^="#"]');

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) {
        return;
      }

      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});