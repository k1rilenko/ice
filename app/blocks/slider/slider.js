/* eslint-disable no-unused-vars */
app.slider = {
	init() {
		const ruleSlider = new Swiper('.swiper-rules', this.optionsRule);
		const giftSlider = new Swiper('.gift__slider .swiper-container', this.optionsGifts);

		let heroSlider = null;
		window.addEventListener('load', () => {
			if (window.innerWidth >= 1280) {
				// eslint-disable-next-line no-shadow
				const heroSlider = new Swiper('.hero__slider .swiper-container', this.optionsHero);
			}
		});
		this.runSlider('.rating__slider .swiper-container', this.optionsRating);
		this.destroySlider(ruleSlider, 991);
		this.destroySlider(giftSlider, 768);
		app.common.initStyle('swiper.min');
	},
	runSlider(selector, options) {
		const slider = new Swiper(selector, options);
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
		pagination: {
			el: '.swiper-rules .swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 1
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
			}
		}
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
