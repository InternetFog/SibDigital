const accordionOb = document.querySelectorAll(".project-card-accordion-block");
if (accordionOb.length != 0) {
	for (let i = 0; i < accordionOb.length; i++) {
		let accordionItems = accordionOb[i].querySelectorAll('.project-card-accordion_list_item');
		if (accordionItems.length != 0) {
			for (let j = 0; j < accordionItems.length; j++) {
				accordionItems[j].addEventListener('mouseover', function() {
					this.closest('.project-card-accordion-block').querySelector('.project-card-accordion_list_item.is-active').classList.remove('is-active');
					this.classList.add('is-active');
				});
				accordionItems[j].addEventListener('click', function() {
					this.closest('.project-card-accordion-block').querySelector('.project-card-accordion_list_item.is-active').classList.remove('is-active');
					this.classList.add('is-active');
				});
			}
		}
	}
}