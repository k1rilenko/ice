app.header = {
	header: document.querySelector('.header'),
	init() {
		this.changePosition();
		this.loginPopup();
	},
	changePosition() {
		window.addEventListener('scroll', () => {
			if (app.header.header && document.documentElement.scrollTop > 80) {
				this.header.style = 'background-color: #ffffff;';
			} else {
				this.header.style = '';
			}
		});
	},
	loginPopup() {
		const headerLoginBtn = document.querySelector('.header__login-button');
		headerLoginBtn.addEventListener('click', evt => {
			evt.preventDefault();
			this.showPopup();
		});
		$(document).ajaxComplete(function () {
			const resetBtn = document.querySelector('.reset-pswd');
			if (!resetBtn) {
				return;
			}
			const popupWrapper = document.querySelectorAll('.popup__wrapper');
			resetBtn.addEventListener('click', e => {
				e.preventDefault();
				popupWrapper[0].classList.add('hidden');
				popupWrapper[1].classList.remove('hidden');
			});
	});

	},
	showPopup() {
		$.fancybox.open({
			src: './enter.html',
			type: 'ajax',
			opts: {
				smallBtn: false,
				toolbar: false,
				touch: false,
				padding: 10,
				backFocus: false,
				afterClose() {
					setTimeout(() => {
						app.slider.ratingSlider.update();
					}, 500);
				}
			}
		});
	}
};
