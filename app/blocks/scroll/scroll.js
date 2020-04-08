/* eslint-disable no-unused-vars */
app.scroll = {
	init() {
		const scrollBtn = document.getElementById('scroll-to-top'),
					firstSection = document.querySelector('.promo'),
					secondSection = document.querySelector('.rules');

		const scrollFunction = () => {

			if (document.documentElement.clientWidth > 991) {
				
				if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
					scrollBtn.style.opacity = '1';
				} else {
					scrollBtn.style.opacity = '0';
				}
			} else {
				// eslint-disable-next-line no-lonely-if
				if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
					scrollBtn.style.opacity = '1';
				} else {
					scrollBtn.style.opacity = '0';
				}
			}
		};
		const scrollToTop = e => {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		};
		window.onscroll = () => scrollFunction();
		if (scrollBtn) {
			scrollBtn.addEventListener('click', scrollToTop);
		}


		if (document.documentElement.clientWidth >= 1280 && firstSection) {
			
			$(firstSection).on('mousewheel DOMMouseScroll', function(event) {
				event.preventDefault();


				var wheelDelta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
		
					if (wheelDelta < 0) {
						$('html,body').animate({
							scrollTop: secondSection.offsetTop - 100
						});
					} else {
						$('html,body').animate({
							scrollTop: firstSection.offsetTop 
						});
					}
				});
		}


	}
};
