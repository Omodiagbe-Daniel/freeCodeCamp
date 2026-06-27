const themes = [
  {
    name: "light",
    message: "Bright and brilliant colors"
  },
  {
    name: "opaque",
    message: "Not bright, not transparent either"
  }
];

const live = document.querySelector('[aria-live="polite"]');
const button = document.getElementById("theme-switcher-button");
const list = document.getElementById("theme-dropdown");

button.addEventListener("click", () => {
  if (list.hidden) {
  list.hidden = false;
  button.setAttribute("aria-expanded", true);
  }
  else {
    list.hidden = true;
    button.setAttribute("aria-expanded", false);
  }

});

list.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  const themeName = e.target.textContent.toLowerCase();

  const theme = themes.find(
    t => t.name === themeName
  );

  if (!theme) return;

  document.body.classList.remove(
    "theme-light",
    "theme-opaque"
  );

  document.body.classList.add(`theme-${theme.name}`);

  live.textContent = theme.message;

  list.hidden = true;
  button.setAttribute("aria-expanded", false);
});

