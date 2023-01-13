import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaosScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdrown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initanimaisFetch from './modules/fetch-animais.js';
import initfetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()
initAnimacaosScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initanimaisFetch();
initfetchBitcoin();
