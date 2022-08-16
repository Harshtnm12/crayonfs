!(function () {
  $(window).resize(function () {
    AOS.refresh();
  });
  $(document).ready(function () {
    $(".mobile_nav_show").click(function () {
      $(document.body).toggleClass("mobile_nav_active");
      $(this).toggleClass("bi-x").toggleClass("bi-list");
    });
    $(window)
      .on("scroll", function () {
        $(this).scrollTop() >= 300
          ? $(".__main_navbar").addClass("navbar_scroll")
          : $(".__main_navbar").removeClass("navbar_scroll");
      })
      .scroll();
  });
  $(window).on("load", function () {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    new Swiper("#recognised .mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
})();
