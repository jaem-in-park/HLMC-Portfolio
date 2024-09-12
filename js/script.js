$(function () {
  // 슬라이드
  let slideInterval;
  function slide() {
    $(".slide ul").animate({ left: "-100%" }, 800, function () {
      $(".slide ul").append($(".slide ul li").first());
      $(".slide ul").css({ left: "0" });
    });
  }
  // 슬라이드를 시작하는 함수
  function startSlide() {
    slideInterval = setInterval(slide, 2000);
  }
  // 슬라이드를 멈추는 함수
  function stopSlide() {
    clearInterval(slideInterval);
  }
  // 페이지 로드 시 슬라이드를 시작
  startSlide();

  // 슬라이드 영역에 마우스를 올리면 멈추고
  $(".slide").on("mouseenter", stopSlide);

  // 슬라이드 영역에서 마우스를 떼면 다시 시작
  $(".slide").on("mouseleave", startSlide);

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
