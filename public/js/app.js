import ScrollSmooth from "./modules/scroll-suave.js";
import ScrollAnimacao from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHorarioFuncionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtc from "./modules/fetch-btc.js";

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

initAnimateScroll();

initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
fetchAnimais('/public/json/animais.json', '.numeros-grid');
fetchBtc("https://blockchain.info/ticker", ".btc-preco");
