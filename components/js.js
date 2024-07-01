$(document).ready(function () {
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 60) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navbar a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".navbar a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      800
    ); // Bu yerda 800 milisekundlik animatsiya davomiyligini belgilash
  });
});
