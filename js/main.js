import {initTheme} from './modules/theme.js';
import {initNav} from './modules/nav.js';
import {initReveal} from './modules/reveal.js';
initTheme(document.getElementById('theme-btn'));
initNav(document.getElementById('menu-btn'),document.getElementById('nav'));
initReveal();
document.getElementById('year').textContent=new Date().getFullYear();
