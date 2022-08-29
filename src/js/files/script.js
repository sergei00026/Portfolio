// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
const iconMenu = document.querySelector('.icon-menu');
const html = document.querySelector('html');

iconMenu.addEventListener("click", function (e) {
	html.classList.toggle('menu-open')
	html.classList.toggle('lock')
});