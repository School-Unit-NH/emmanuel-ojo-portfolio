import { initTheme } from "./modules/theme.js";
import { initNav } from "./modules/nav.js";
import { initReveal } from "./modules/reveal.js";
import { renderIcons } from "./modules/icons.js";
renderIcons();
document
  .querySelectorAll("[data-icon]")
  .forEach((el) =>
    el.addEventListener("icon", () => renderIcons(el.parentElement)),
  );
initTheme(document.getElementById("theme-switch"));
initNav(document.getElementById("menu-btn"), document.getElementById("nav"));
initReveal();
document.getElementById("year").textContent = new Date().getFullYear();
