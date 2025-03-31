// 메인 비쥬얼 슬라이더
const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 4000,  
        disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
    },
    paginationClickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-bar',
        type: "progressbar",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});
const num_swiper = new Swiper('.main-swiper', {
    autoplay: {
        delay: 4000,  
        disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
    },
    pagination: {
        el: ".swiper-pagination-num",
        type: "fraction",
        // 페이지네이션을 커스텀할 수 있는 함수 (fraction 모양을 어떻게 보여줄지 정의)
        renderFraction: function (currentClass, totalClass) {
            // 현재 슬라이드 번호와 총 슬라이드 번호를 HTML로 반환
            // currentClass와 totalClass는 각각 현재와 전체 슬라이드 번호를 표시할 곳에 추가할 클래스
            return `<span class="${currentClass}"></span>  <span class="${totalClass}"></span>`;
        
            // 위 코드와 동일한 기능을 하며, 아래와 같이 + 기호를 이용한 방식도 가능함.
            // return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class"' + totalClass + '"></span>';
            },
            // 현재 슬라이드 번호를 두 자리로 만들어주는 함수
            formatFractionCurrent: function (number) {
                // 슬라이드 번호가 10보다 작으면 앞에 '0'을 붙여서 두 자리 숫자로 표시
                return number < 10 ? '0' + number : number;  // 현재 슬라이드 숫자에 0 추가
            },
            // 총 슬라이드 숫자를 두 자리로 만들어주는 함수
            formatFractionTotal: function (number) {
                // 슬라이드 번호가 10보다 작으면 앞에 '0'을 붙여서 두 자리 숫자로 표시
                return number < 10 ? '0' + number : number;  // 총 슬라이드 숫자에 0 추가
            },
        },

});
swiper.controller.control = num_swiper;


/* ****************************************************************** */
var service_swiper = new Swiper(".service-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
        el: ".service-swiper-pagination",
        type: "progressbar",
    },
});

/* ****************************************************************** */
var news_swiper = new Swiper(".news-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".news-swiper-pagination",
        type: "progressbar",
    },
});

/* ****************************************************************** */
var sns_swiper = new Swiper(".sns-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
});