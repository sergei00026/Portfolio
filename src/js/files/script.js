// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
const iconMenu = document.querySelector('.icon-menu');
const html = document.querySelector('html');
const headerList = document.querySelector('.header__list');

document.addEventListener("click", function (e) {

	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		html.classList.toggle('menu-open');
		html.classList.toggle('lock');
	}
	else if (!targetElement.closest('.menu__body')) {
		html.classList.remove('menu-open');
		html.classList.remove('lock');
	}
});