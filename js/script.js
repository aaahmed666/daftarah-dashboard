document.getElementById("menu-toggle").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
});

// --------------------- navbar-toggler ------------------------------
document
  .getElementById("navbar-toggler")
  .addEventListener("click", function () {
    const menu = document.getElementById("navbar-menu");

    menu.classList.toggle("active");

    document.addEventListener("click", function (event) {
      if (
        !menu.contains(event.target) &&
        !event.target.matches("#navbar-toggler")
      ) {
        menu.classList.remove("active");
      }
    });
  });

// ---------------- dropdownLink --------------------------
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.getElementById("dropdownLink");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownLink.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});

// ------------------ accordion -------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header, index) => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    if (index === 2) {
      content.style.display = "block";
      if (icon) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      }
    }

    header.addEventListener("click", function () {
      const isActive = content.style.display === "block";

      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(".accordion-header i").forEach((icon) => {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      });

      if (!isActive) {
        content.style.display = "block";
        if (icon) {
          icon.classList.remove("fa-angle-down");
          icon.classList.add("fa-angle-up");
        }
      }
    });
  });
});

// ----------------------------

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleSwitch = document.getElementById("flexSwitchCheckDefault");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggleSwitch.checked = true;
  }

  themeToggleSwitch.addEventListener("change", function () {
    if (themeToggleSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
