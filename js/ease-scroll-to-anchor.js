const anchors = document.querySelectorAll('[href^="#"]');

if(anchors.length != 0) {
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
		
			let blockID = anchor.getAttribute('href').replace("#", "");
		
			let scrollBlock = document.querySelector(`[name="${blockID}"]`)
			if(scrollBlock !== null) {
				scrollBlock.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}
		})
	}
}
