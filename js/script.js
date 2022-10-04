$(document).ready(function () {
  $("html").css("overflow", "hidden");

  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  let modalOpen = $(".modalopen");
  let modalCloseFn = () => {
    modalWrap.stop().fadeOut(200);
    $("html").css("overflow", "auto");
    modalOpen.show();
  };

  modalOpen.hide();
  modalClose.click(function () {
    modalCloseFn();
  });
  $("html").keydown(function (key) {
    if (key.keyCode) {
      modalCloseFn();
    }
  });

  let modalMain = $(".modal-main");
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  modalWrap.click(function () {
    modalCloseFn();
  });

  modalOpen.click(function () {
    modalWrap.stop().fadeIn(200);
    $("html").css("overflow", "hidden");
    modalOpen.hide();
  });

  let more_wrap = $(".more-wrap");
  let member_more = $(".member-more");
  member_more.click(function () {
    more_wrap.fadeIn(300);
  });
  let more_div_close = $(".more-div-close");
  more_div_close.click(function () {
    more_wrap.fadeOut(300);
  });
  more_wrap.click(function () {
    more_wrap.fadeOut(300);
  });

  $(".more-div").click(function (event) {
    event.stopPropagation();
  });

  // 모바일 메뉴 기능
  $(".mb-bt").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("mb-bt-open");
    $(".mb-dim").toggleClass("mb-dim-open");
    $(".mb-wrap").toggleClass("mb-wrap-open");
  });

  $(window).resize(function () {
    let temp = $(window).width();
    if (temp > 1000) {
      $(".mb-bt").removeClass("mb-bt-open");
      $(".mb-dim").removeClass("mb-dim-open");
      $(".mb-wrap").removeClass("mb-wrap-open");
      $(".mb-menu>li").height(60);
      $(".mb-mainmenu").removeClass("mb-mainmenu-open");
    }
  });

  let mb_mainmenu = $(".mb-mainmenu");
  let mb_submenu = $(".mb-submenu");
  let mb_submenu_high = [];

  $.each(mb_submenu, function (index) {
    let count = $(this).find("li").length;
    mb_submenu_high[index] = 56 * count;
  });

  // 최종 결과
  let mb_li = $(".mb-menu > li");
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      $(this).toggleClass("mb-mainmenu-open");
      let active = $(this).hasClass("mb-mainmenu-open");
      if (active) {
        let temp = mb_submenu_high[index];
        mb_li.eq(index).height(temp + 60);
      } else {
        mb_li.eq(index).height(60);
      }
    });
  });
  let mb_dim = $(".mb-dim");
  mb_dim.click(function () {
    $(".mb-bt").removeClass("mb-bt-open");
    $(".mb-dim").removeClass("mb-dim-open");
    $(".mb-wrap").removeClass("mb-wrap-open");
    $(".mb-menu>li").height(60);
    $(".mb-mainmenu").removeClass("mb-mainmenu-open");
  });
});

window.onload = function () {
  $("#datepicker").datepicker({
    changeMonth: false,
    autoSize: true,
    firstDay: 0,
    showMonthAfterYear: true,
    yearSuffix: ".",
    altFormat: "yyyy-mm-dd",
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNamesShort: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    // onSelect: function () {
    //   // 날짜 선택 이벤트
    // },
    // onChangeMonthYear: function () {
    //   // 월, 년 변경 이벤트
    //   setTimeout(function () {
    //     let datepickerA = $("#datepicker td a");
    //     $.each(datepickerA, function (index, item) {
    //       let now = $(this).attr("data-date");
    //       now = parseInt(now);
    //       if (now < 10) {
    //         $(this).text("0" + now);
    //         $(this).attr("data-date", "0" + now);
    //       }
    //     });
    //   }, 50);
    // },
  });
  // let datepickerA = $("#datepicker td a");
  // $.each(datepickerA, function (index, item) {
  //   let now = $(this).attr("data-date");
  //   now = parseInt(now);
  //   if (now < 10) {
  //     $(this).text("0" + now);
  //   }
  // });

  // 비주얼 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
  });
  let slide_now = "ing";
  $(".sw-visual-bt").click(function () {
    if (slide_now == "ing") {
      slide_now = "stop";
      sw_visual.autoplay.stop();
      $(this).find("span").text("play_arrow");
    } else {
      slide_now = "ing";
      sw_visual.autoplay.start();
      $(this).find("span").text("pause");
    }
  });

  // let date = new Date();

  // let viewYear = date.getFullYear();
  // let viewMonth = date.getMonth();
  // document.querySelector('.year-month').textContent = `${viewYear}. ${viewMonth + 1}`;

  // 배너 슬라이드
  let sw_banner = new Swiper(".sw-banner", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: ".sw-banner-prev",
      nextEl: ".sw-banner-next",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6,
      },
      1260: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 4,
      },
      860: {
        slidesPerView: 3,
      },
    },
  });
  $(".sw-banner-pause").click(function () {
    let temp = $(this).find("span").text();
    if (temp == "play_arrow") {
      $(this).find("span").text("pause");
      sw_banner.autoplay.stop();
    } else {
      $(this).find("span").text("play_arrow");
      sw_banner.autoplay.start();
    }
  });

  $(".gotop").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  let galleryData = [
    {
      link: "#",
      title: "3월 인문학 특강 [우리 삶에 철학이 필요한 이유]",
      data: "2021-12-14",
      pic: "gallery_1.jpg",
    },
  ];

  function actGallery(_tag, _link, _pic, _date, _title) {
    //대상찾기
    let who = $(_tag);
    who.attr("href", _link);
    let html = `
      <span class="gallery-img"></span>
      <p class="gallery-cont">
        <span class="gallery-title">
        ${_title}
        </span>
      <span class="gallery-date">
        ${_date}
      </span>
      </p>
`;
    who.html(html);
    let bg = who.find(".gallery-img");
    bg.css("background", "url(images/" + _pic + ") no-repeat center");
    bg.css("background-size", "cover");
  }
  actGallery(
    "#gallery-list-1",
    "http://naver.com",
    "gallery_1.jpg",
    "2021-12-14",
    "3월 인문학 특강 [우리 삶에 철학이 필요한 이유"
  );
};
