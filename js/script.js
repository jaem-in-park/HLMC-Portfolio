$(function () {
  // 슬라이드
  function slide() {
    $(".slide ul").animate({ left: "-100%" }, 3050, function () {
      $(".slide ul").append($(".slide ul li").first());
      $(".slide ul").css({ left: "0" });
    });
  }
  setInterval(slide, 3500);

  // 카테고리 메뉴
  $(".header-list > a , .Ab>li>a").mouseenter(function () {
    $(".Ab").stop().slideDown();
  });
  $(".header-list > a , .Ab>li>a").mouseleave(function () {
    $(".Ab").stop().slideUp();
  });
  // 보조메뉴
  $("nav>ul>li").mouseenter(function () {
    $(this).find(".sub").stop().slideDown();
  });
  $("nav>ul>li").mouseleave(function () {
    $(this).find(".sub").stop().slideUp();
  });
});
