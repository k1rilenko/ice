app.enter = {
	init() {
		this.tabs();
	},
	tabs() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});

		$(document).ajaxComplete(function () {
			const resetBtn = document.querySelector('.reset-pswd');
			const popupWrapper = document.querySelectorAll('.popup__wrapper');
		resetBtn.addEventListener('click', (e) => {
			e.preventDefault();
			popupWrapper[0].classList.add('hidden')
			popupWrapper[1].classList.remove('hidden')
			});
		});

			
		
	}
};

