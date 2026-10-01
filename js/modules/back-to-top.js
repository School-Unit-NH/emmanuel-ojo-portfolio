export function initBackToTop(btn) {
  if (!btn) return;
  const toggle = () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  };
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
