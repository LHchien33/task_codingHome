const elem = document.querySelector('input[name="reg-datepicker"]');
if (elem){
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-TW',
  }); 
}

  const recommendSwiper = new Swiper('.recommend-swiper', {
    effect: 'fade',
    autoplay: {
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.recommend-swiper .swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.recommend-swiper .swiper-button-next',
      prevEl: '.recommend-swiper .swiper-button-prev',
    },

  });

  const languageSwiper = new Swiper('.language-swiper', {
    speed: 4000,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween : 8,
    loopedSlides: 10,
    breakpoints: {
      768: {
        spaceBetween: 12,
      },
      992: {
        spaceBetween: 16,
      }
    },
  });

  const courseFilterSwiper = new Swiper('.course-filter-swiper', {
    slidesPerView: 'auto',
    spaceBetween : 16,
    freeMode: true,
    breakpoints: {
      1440: {
        slidesPerView: 6,
      }
    }
  });



