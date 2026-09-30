const KEY='eo-theme';
export function initTheme(btn){
  const root=document.documentElement;
  let t=null;try{t=localStorage.getItem(KEY)}catch{}
  t=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const set=v=>{root.dataset.theme=v;btn.textContent=v==='dark'?'Light':'Dark';btn.setAttribute('aria-label',`Switch to ${v==='dark'?'light':'dark'} theme`);try{localStorage.setItem(KEY,v)}catch{}};
  set(t);btn.addEventListener('click',()=>set(root.dataset.theme==='dark'?'light':'dark'));
}
