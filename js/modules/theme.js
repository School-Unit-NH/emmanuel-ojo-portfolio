const KEY='eo-theme';
export function initTheme(sw){
  const root=document.documentElement;
  let t=null;try{t=localStorage.getItem(KEY)}catch{}
  t=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const set=v=>{root.dataset.theme=v;sw.setAttribute('aria-checked',v==='dark');try{localStorage.setItem(KEY,v)}catch{}};
  set(t);sw.addEventListener('click',()=>set(root.dataset.theme==='dark'?'light':'dark'));
}
