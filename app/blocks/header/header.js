app.header = {
	header: document.querySelector('.header'),
	init() {
		this.changePosition();
	},
	changePosition() {
		window.addEventListener('scroll', () => {
			if (app.header.header && document.documentElement.scrollTop > 80) {
				this.header.style = 'background-color: #ffffff;';
			} else {
				this.header.style = '';
			}
		});
	}
};
