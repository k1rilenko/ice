app.header = {
	header: document.querySelector('.header'),
	init() {
		this.changePosition();
		this.loginPopup();
		this.showPswdResetForm();
		this.linkScrollTo();
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
		headerLoginBtn.addEventListener('click', event => {
			event.preventDefault();
			$.fancybox.open({
				src: './enter.html',
				type: 'ajax',
				opts: {
					smallBtn: false,
					toolbar: false,
					touch: false,
					padding: 10,
					backFocus: false
				}
			});
		});
	},



	showPswdResetForm() {
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

	linkScrollTo() {
		const linkScroll = document.querySelectorAll('.link-scroll-to');
		for (let i = 0; i < linkScroll.length; i++) {
			let button = linkScroll[i];
			button.addEventListener('click', (event) => {
				event.preventDefault();
				const blockID = button.getAttribute('href')
				document.querySelector(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}
	}


};

