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

function showScaleElements(selectorParent, selectors) {
	const parent = document.querySelectorAll(selectorParent),
		elements = document.querySelectorAll(selectors);
	let step = 0;

	elements.forEach(element => {
		step += (0.5 / +elements.length);

		element.style.cssText = `transition: ${step}s all linear;`;

	});


}
showScaleElements('.header', '.header__item');