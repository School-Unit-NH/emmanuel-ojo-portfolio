export function initNav(toggle,nav){
  const icon=toggle.querySelector('[data-icon]');
  const set=o=>{nav.classList.toggle('open',o);toggle.setAttribute('aria-expanded',o);icon.dataset.icon=o?'x':'menu';icon.dispatchEvent(new Event('icon'))};
  toggle.addEventListener('click',()=>set(!nav.classList.contains('open')));
  nav.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
  const links=[...nav.querySelectorAll('a[href^="#"]')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(l=>{const s=l.hash&&l.pathname===location.pathname?document.querySelector(l.hash):null;s&&io.observe(s)});
}
