function openMainMenu(menuOb, btnOb) {
	if (humburgerBtn && menuOb) {
		btnOb.addEventListener('click', function() {
			menuOb.classList.toggle('is-opened');
		});
	} else console.log('Menu object or Button Object is undefined');
}

const humburgerBtn = document.querySelector('.hamburger.is-main-menu-btn');
const menuOb = document.querySelector('.header_content-block');

if (humburgerBtn && menuOb) {
	openMainMenu(menuOb, humburgerBtn);
}