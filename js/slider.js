function slide(sliderOb, direction) {
	let slides = sliderOb.querySelectorAll('.slider-block_slides_item');
	let activeSlide = sliderOb.querySelector('.slider-block_slides_item.is-active');
	let dots = sliderOb.querySelectorAll('.slider-block_ui-dots-block span');

	let nextSlide;

	if (direction == 0) { // Slide ot Next

		direction = 1;
		if (activeSlide != slides[slides.length - 1]) nextSlide = activeSlide.nextElementSibling;
		else nextSlide = slides[0];

	} else if (direction == -1) { // Slide ot Prev

		if (activeSlide != slides[0]) nextSlide = activeSlide.previousElementSibling;
		else nextSlide = slides[slides.length - 1];

	} else { // Slide ot Num

		nextSlide = slides[direction - 1];
		for (let i = 0; i < slides.length; i++) {	
			if (activeSlide == slides[i]) {
				if (i > direction - 1) direction = -1;
				else if (i < direction - 1) direction = 1;
				else if (i == direction - 1) return activeSlide;
			}
		}

	}

	console.log(nextSlide);

	// Slide function
	for (let i = 0; i < slides.length; i++) {	
		if(slides[i] == nextSlide) {
			// Preparation of styles
			if(direction == -1) { 
				slides[i].style.transition = '0s'; 
				slides[i].style.left = '-100%'; 
			}

			// Actions for animation
			setTimeout(function(){ 
				slides[i].style.transition = ''; 

				slides[i].style.left = '0';
				slides[i].style.opacity = '1';
	
				activeSlide.style.left = String(-direction * 100) + '%';
				activeSlide.style.opacity = '0';
	
				sliderOb.querySelector('.slider-block_ui-dots-block span.is-active').classList.remove('is-active');
				dots[i].classList.add('is-active');
			}, 10);

			// Actions after animation
			setTimeout(function(){ 
				slides[i].classList.add('is-active');
				activeSlide.classList.remove('is-active');
				activeSlide.style.left = '';
				slides[i].style.opacity = '';
				activeSlide = slides[i];
			}, 400);
		}
	}
	return activeSlide;
}


const slidersObjs = document.querySelectorAll('.slider-block');
if (slidersObjs.length != 0) {
	for (let i = 0; i < slidersObjs.length; i++ ) {
		let slides = slidersObjs[i].querySelectorAll('.slider-block_slides_item');
		if(slides.length != 0) {
			let prevBtn = slidersObjs[i].querySelector('.slider-block_ui-btn.is-prev');
			let nextBtn = slidersObjs[i].querySelector('.slider-block_ui-btn.is-next');
			nextBtn.addEventListener('click', function(e){
				activeSlide = slide(this.closest('.slider-block'), 0);
			});
			prevBtn.addEventListener('click', function(){
				activeSlide = slide(this.closest('.slider-block'), -1);
			});
			let dots = slidersObjs[i].querySelectorAll('.slider-block_ui-dots-block span');
			for (let j = 0; j < dots.length; j++ ) {
				dots[j].addEventListener('click', function(){
					activeSlide = slide(dots[j].closest('.slider-block'), j+1);
				});
			}
		}
	}
}