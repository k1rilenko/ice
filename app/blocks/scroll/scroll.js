/* eslint-disable no-unused-vars */
app.scroll = {
  init() {
    const scrollBtn = document.getElementById('scroll-to-top')
    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } 
    if (scrollBtn) {
      
    window.onscroll = () => scrollFunction()
    
    const scrollFunction = () => {
      if (document.documentElement.clientWidth > 991) {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
          scrollBtn.style.opacity = "1";
        } else {
          scrollBtn.style.opacity = "0";
        }
      } else {
          if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            scrollBtn.style.opacity = "1";
          } else {
            scrollBtn.style.opacity = "0";
          }
        }
      }
      scrollBtn.addEventListener('click', scrollToTop);
    } // end init
  }
}