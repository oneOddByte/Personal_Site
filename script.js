document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Initialize theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }

  // Theme toggle click handler
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    const isExpanded = mainNav.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Only trigger if not in an input field
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      // Toggle dark mode with 'D' key
      if (e.key === "d" || e.key === "D") {
        themeToggle.click();
      }

      // Toggle mobile menu with 'M' key
      if (e.key === "m" || e.key === "M") {
        menuToggle.click();
      }

      // Close mobile menu with Escape key
      if (e.key === "Escape" && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", false);
      }
    }
  });

  // Keyboard shortcuts info popup
  const keyboardHelp = document.getElementById("keyboard-help");
  const keyboardPopup = document.getElementById("keyboard-popup");

  if (keyboardHelp && keyboardPopup) {
    keyboardHelp.addEventListener("click", () => {
      keyboardPopup.classList.toggle("hidden");
    });

    // Close popup when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !keyboardHelp.contains(e.target) &&
        !keyboardPopup.contains(e.target)
      ) {
        keyboardPopup.classList.add("hidden");
      }
    });

    // Close popup with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !keyboardPopup.classList.contains("hidden")) {
        keyboardPopup.classList.add("hidden");
      }
    });
  }

  // Add focus trap for modals if needed
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    element.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  // Initialize any focus traps if needed
  // Example: if (someModal) trapFocus(someModal);
});
