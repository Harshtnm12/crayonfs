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
  });
})();
