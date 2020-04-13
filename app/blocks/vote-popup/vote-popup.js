/* eslint-disable no-unused-vars */
app.votePopup = {
	init() {
		
    const votePopupBtn = document.querySelectorAll('.rating__button');
    const votePopupHeroLink = document.querySelectorAll('.hero-list__link');
    console.log(document.querySelectorAll('.vote-popup-slider .swiper-slide'))

    const logButtonIndex = (event, buttonIndex) => {
      // event.preventDefault();
      const target = event.target;
      const dataSrc = target.dataset.src;
      console.log('buttonIndex:', buttonIndex);   
      console.log(dataSrc);
    }
    
    const showPopup = () => {
      $.fancybox.open({
        src  : './vote-popup.html',
        type : 'ajax',
        opts : {
          smallBtn: false,
          toolbar: false,
          afterShow : function( instance, current ) {
            console.info( 'done!' );
          }
        }
      });
    }




    for (let i = 0; i < votePopupBtn.length; i++) {
      let button = votePopupBtn[i];
      button.addEventListener('click', () => {
        logButtonIndex(event, i);
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
  
  // $('a[data-slide]').click(function(e){
  //   e.preventDefault();
  //   mySwiper.swipeTo( $(this).data('slide') );
  // });
};