app.header = {
	header: document.querySelector('.header'),
	init() {
		this.changePosition();
		this.loginPopup();
		this.showPswdResetForm();
		
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
			headerLoginBtn.addEventListener('click', (event) => {
				event.preventDefault();
				$.fancybox.open({
					src: './enter.html',
					type: 'ajax',
					opts: {
						smallBtn: false,
						toolbar: false,
						touch: false,
						padding: 10,
						backFocus: false,
						afterShow: function() {
							console.log('opened')
						}, 
						afterClose: function() { 
							console.log('closed')
							$.fancybox.destroy();
							setTimeout(() => {
								app.slider.ratingSlider.update()
							}, 500)
						},
					}
				});
			});
	},



	showPswdResetForm() {
		$(document).ajaxComplete(function () {
			const resetBtn = document.querySelector('.reset-pswd');
			const popupWrapper = document.querySelectorAll('.popup__wrapper');
		resetBtn.addEventListener('click', (e) => {
			e.preventDefault();
			popupWrapper[0].classList.add('hidden')
			popupWrapper[1].classList.remove('hidden')
			});
	});
	},



};

