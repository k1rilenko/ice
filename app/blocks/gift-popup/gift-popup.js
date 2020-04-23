/* eslint-disable no-loop-func */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
app.giftPopup = {
	init() {
		const giftPopupBtn = document.querySelectorAll('.gift-modal');
		const showPopup = () => {
			$.fancybox.open({
				src: './gift-popup.html',
				type: 'ajax',
				opts: {
					smallBtn: false,
					toolbar: false,
					touch: false,
					padding: 10
				}
			});
		};
		for (let i = 0; i < giftPopupBtn.length; i++) {
			const button = giftPopupBtn[i];
			button.addEventListener('click', (event) => {
				event.preventDefault();
				showPopup();
				const btnIndex = button.dataset.slideIndex;
				$(document).ajaxComplete(function () {
					app.slider.giftSlider.slideTo(btnIndex, 1000, false);
				});
			});
		}
		$(document).ajaxComplete(function () {
			const giftPopupHeroLink = document.querySelectorAll('.gift-list__link');
			for (let i = 0; i < giftPopupHeroLink.length; i++) {
				const link = giftPopupHeroLink[i];
				link.addEventListener('click', (event) => {
					event.preventDefault();
					const dataSlide = link.dataset.slide;
					const slideIndex = document.getElementById('gift_' + dataSlide).dataset.slideIndex;
					console.log(slideIndex);
					app.slider.giftSlider.slideTo(slideIndex, 1000, false);
				});
			}
		});
	}
};
