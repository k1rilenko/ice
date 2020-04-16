/* eslint-disable no-unused-expressions */
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
		$(document).ajaxComplete(() => {
			app.slider.voteSlider = new Swiper('.vote-popup-slider .swiper-container', {
				updateOnWindowResize: true,
				navigation: {
					nextEl: '.vote-popup-slider .swiper-button-next',
					prevEl: '.vote-popup-slider .swiper-button-prev'
				},
				slidesPerView: 1,
				spaceBetween: 10,
				grabCursor: true,
				// autoHeight: true,
				on: {
					init() {
						const activeSlide = 'gradient_' + document.querySelector('.vote-popup-slider .swiper-slide-active').dataset.slide;
						const modalWrapper = document.querySelector('.fancybox-slide');
						switch (activeSlide) {
							case 'gradient_hrust':
								modalWrapper.style.background = 'linear-gradient(195.7deg, #FFD84F -0.15%, #FF8A00 100%)';
								break;
							case 'gradient_eskimon':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FCFF71 0%, #FFC632 99.52%)';
								break;
							case 'gradient_raduga':
								modalWrapper.style.background = 'linear-gradient(204.88deg, #FFC2D1 0%, #CA5393 98.42%)';
								break;
							case 'gradient_kaktus':
								modalWrapper.style.background = 'linear-gradient(204.88deg, #D3FF76 0%, #62C812 98.42%)';
								break;
							case 'gradient_capitan':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FF9B71 0%, #FF3E32 99.52%)';
								break;
							case 'gradient_rojoker':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #AACCFF 0%, #4A5CFF 99.52%)';
								break;
							case 'gradient_rifleniu':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #8CFFF8 0%, #0683AB 99.52%)';
								break;
							case 'gradient_plombirovna':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #AAFAFF 0%, #37ABFF 99.52%)';
								break;
							case 'gradient_lakomka':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FFC1F5 0%, #E039EF 99.52%)';
								break;
							default:
								modalWrapper.style.background = 'transparent';
						}
					},
					transitionStart() {
						const activeSlide = 'gradient_' + document.querySelector('.vote-popup-slider .swiper-slide-active').dataset.slide;
						const modalWrapper = document.querySelector('.fancybox-slide');
						switch (activeSlide) {
							case 'gradient_hrust':
								modalWrapper.style.background = 'linear-gradient(195.7deg, #FFD84F -0.15%, #FF8A00 100%)';
								break;
							case 'gradient_eskimon':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FCFF71 0%, #FFC632 99.52%)';
								break;
							case 'gradient_raduga':
								modalWrapper.style.background = 'linear-gradient(204.88deg, #FFC2D1 0%, #CA5393 98.42%)';
								break;
							case 'gradient_kaktus':
								modalWrapper.style.background = 'linear-gradient(204.88deg, #D3FF76 0%, #62C812 98.42%)';
								break;
							case 'gradient_capitan':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FF9B71 0%, #FF3E32 99.52%)';
								break;
							case 'gradient_rojoker':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #AACCFF 0%, #4A5CFF 99.52%)';
								break;
							case 'gradient_rifleniu':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #8CFFF8 0%, #0683AB 99.52%)';
								break;
							case 'gradient_plombirovna':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #AAFAFF 0%, #37ABFF 99.52%)';
								break;
							case 'gradient_lakomka':
								modalWrapper.style.background = 'linear-gradient(204.03deg, #FFC1F5 0%, #E039EF 99.52%)';
								break;
							default:
								modalWrapper.style.background = 'transparent';
						}
					}
				}
			});
			app.slider.giftSlider = new Swiper('.gift-popup-slider .swiper-container', {
				updateOnWindowResize: true,
				navigation: {
					nextEl: '.gift-popup-slider .swiper-button-next',
					prevEl: '.gift-popup-slider .swiper-button-prev'
				},
				pagination: {
					el: '.gift-popup-slider .swiper-pagination',
					clickable: true
				},
				slidesPerView: 1,
				spaceBetween: 10,
				grabCursor: true,
				autoHeight: true
			});
		});
		window.addEventListener('load', () => {
			if (window.innerWidth >= 991) {
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
		pagination: '.rating__slider .swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		speed: 1000,
    autoplay: {
      delay: 3000,
    },
		coverflowEffect: {
			rotate: 0,
			stretch: 60,
			depth: 100, 
			modifier: 1.5, 
			slideShadows : false,
		},
		navigation: {
			nextEl: '.rating__slider .swiper-button-next',
			prevEl: '.rating__slider .swiper-button-prev'
		},
		on: {
			init() {
				setTimeout(() => {
					app.slider.ratingSlider.update()
				}, 500)
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
	pagination: '.hero__slider .swiper-pagination',
	paginationClickable: true,
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	speed: 1000,
    autoplay: {
      delay: 3000,
    },
	coverflowEffect: {
		rotate: 0,
		depth: 100, 
		modifier: 1.5, 
		slideShadows : false,
	},
	navigation: {
		nextEl: '.hero__slider .swiper-button-next',
		prevEl: '.hero__slider .swiper-button-prev'
	},
		breakpoints: {
			991: {
				coverflowEffect: {
					stretch: 80,
					},
				},
			1280: {
				coverflowEffect: {
					stretch: 80,
				},
			},
			1630: {
				coverflowEffect: {
					stretch: 60,
				},
			}
		},
	on: {
		init() {
			setTimeout(() => {
				app.slider.heroSlider.update()
				app.slider.heroSlider.slideNext()
				app.slider.heroSlider.autoplay.start();
			}, 500)
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
	}};
