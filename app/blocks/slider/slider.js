/* eslint-disable no-unused-vars */
app.slider = {
	init() {
		const ruleSlider = new Swiper('.swiper-rules', this.options);
		let heroSlider = null;
		window.addEventListener('load', () => {
			if (window.innerWidth > 1280) {
				heroSlider = new Swiper('.hero__slider .swiper-container', this.optionsHero);
			}
		});
		this.runSlider('.rating__slider .swiper-container', this.optionsRating);
		this.runSlider('.swiper-gifts', this.options);
		this.destroySlider(ruleSlider, 1280);
		app.common.initStyle('swiper.min');
	},
	runSlider(selector, options) {
		const slider = new Swiper(selector, options);
	},
	options: {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10
	},
	optionsRating: {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10
	},
	optionsHero: {
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true
	},
	destroySlider(el, size) {
		window.addEventListener('resize', () => {
			if (window.innerWidth > size) {
				el.destroy(true, true);
			}
		});
		window.addEventListener('load', () => {
			if (window.innerWidth > size) {
				el.destroy(true, true);
			}
		});
	}
};
