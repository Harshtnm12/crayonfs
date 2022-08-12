!(function () {
  $(document).ready(function () {
    $(".mobile_nav_show").click(function () {
      $(document.body).toggleClass("mobile_nav_active");
      $(this).toggleClass("bi-x").toggleClass("bi-list");
    });
  });
})();
