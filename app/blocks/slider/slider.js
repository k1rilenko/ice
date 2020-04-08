/* eslint-disable no-unused-vars */
app.slider = {
	rulesSlider: null,
	giftSlider: null,
	ratingSlider: null,
	heroSlider: null,
	init() {
		if (document.querySelector('.swiper-rules')) {
			app.slider.rulesSlider = new Swiper('.swiper-rules', this.optionsRule);
			if (window.innerWidth < 992) {
				app.slider.rulesSlider.init();
			}
		}
		if (document.querySelector('.gift__slider .swiper-container')) {
			app.slider.giftSlider = new Swiper('.gift__slider .swiper-container', this.optionsGifts);
			this.destroySlider(app.slider.giftSlider, 768);
		}
		app.slider.ratingSlider = new Swiper('.rating__slider .swiper-container', this.optionsRating);

		window.addEventListener('load', () => {
			if (window.innerWidth >= 1280) {
				app.slider.heroSlider = new Swiper('.hero__slider .swiper-container', this.optionsHero);
			}
		});

		app.common.initStyle('swiper.min');
	},
	options: {
		pagination: {
			el: '.swiper-rules .swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10
	},
	optionsRule: {
		init: false,
		updateOnWindowResize: true,
		pagination: {
			el: '.rules__slider .swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 1
			}
		},
		on: {
			resize() {
				if (window.innerWidth < 992) {
					app.slider.rulesSlider.init();
				}
				if (window.innerWidth < 992) {
					app.slider.rulesSlider.init();
					console.log(app.slider.rulesSlider);
				}
			}
		}
	},
	optionsGifts: {
		pagination: {
			el: '.gift__slider .swiper-pagination',
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
		spaceBetween: 10,
		breakpoints: {
			991: {
				slidesPerView: 5,
				spaceBetween: 0,
				slidesPerGroup: 1,
				centeredSlides: true,
				loop: true,
				speed: 500,
				navigation: {
					nextEl: '.rating__slider .swiper-button-next',
					prevEl: '.rating__slider .swiper-button-prev'
				}
			}
		},
		on: {
			init() {
				const activeIndex = this.activeIndex;
				const realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
				$('.rating__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
				$('.rating__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
			},
			slideChange() {
				const activeIndex = this.activeIndex;
				const realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
				$('.rating__slider .swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
				$('.rating__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
				$('.rating__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
			}
		}
	},
	optionsHero: {
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		breakpoints: {
			1280: {
				slidesPerView: 5,
				spaceBetween: 0,
				slidesPerGroup: 1,
				centeredSlides: true,
				loop: true,
				loopFillGroupWithBlank: true
			}
		},
		navigation: {
			nextEl: '.hero__slider .swiper-button-next',
			prevEl: '.hero__slider .swiper-button-prev'
		},
		on: {
			init() {
				const activeIndex = this.activeIndex;
				const realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
				$('.hero__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
				$('.hero__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
			},
			slideChange() {
				const activeIndex = this.activeIndex;
				const realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
				$('.hero__slider .swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
				$('.hero__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
				$('.hero__slider .swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
			},
			resize() {
				if (app.slider.heroSlider !== null) {
					app.slider.heroSlider.updateSlides();
				}
				if (window.innerWidth <= 1280 ) {
					app.slider.heroSlider.destroy();
				}
			}
		}
	},
	destroySlider(el, size) {
		if (!el) {
			return;
		}
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
