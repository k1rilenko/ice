/* eslint-disable no-unused-vars */
app.votePopup = {
	init() {
		
    const votePopupBtn = document.querySelectorAll('.rating__button');
    const votePopupHeroLink = document.querySelectorAll('.hero-list__link');
    
    const showPopup = () => {
      $.fancybox.open({
        src  : './vote-popup.html',
        type : 'ajax',
        opts : {
          smallBtn: false,
          toolbar: false,
          afterShow : function( instance, current ) {
            console.info( 'done!' );
          },
          afterClose : function(instance) {
            location.reload()
          }
          
        }
      });
    }

    for (let i = 0; i < votePopupBtn.length; i++) {
      let button = votePopupBtn[i];
      button.addEventListener('click', () => {
        showPopup();
      });
    }

    for (let i = 0; i < votePopupHeroLink.length; i++) {
      let link = votePopupHeroLink[i];     
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const dataSlide = link.dataset.slide;
        const slideIndex = document.getElementById(dataSlide).dataset.slideIndex
        app.slider.voteSlider.slideTo(slideIndex, 1000, false);
      });
    } 

  }
};