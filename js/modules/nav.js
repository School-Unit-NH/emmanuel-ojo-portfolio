export function initNav(toggle,nav){
  toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')});
  const links=[...nav.querySelectorAll('a[href^="#"]')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(l=>{const s=document.querySelector(l.hash);s&&io.observe(s)});
}
