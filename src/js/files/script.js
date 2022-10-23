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

// add animation regulat increase
function showScaleElements(selectorParent, selectors, duration = 0.3, speed = 0.2) {
	const parent = document.querySelectorAll(selectorParent),
		elements = document.querySelectorAll(selectors);
	let step = 0;

	elements.forEach(element => {
		step += (speed / +elements.length);
		element.style.cssText = `transition: ${duration}s all ease ${step}s;`;
	});
}
showScaleElements('.header', '.header__item');
showScaleElements('.header', '.aboutme-page__point', 0.5, 0.5);