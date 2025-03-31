const gallerySwiper = new Swiper('.global-swiper--gallery', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -50,
    speed: 500,
});

const circleSwiper = new Swiper('.global-swiper--circle', {
    slidesPerView: 'auto',
    slidesOffsetBefore: -220,
    slidesOffsetAfter: 220,
    speed: 1000,
    allowTouchMove: false,
});


const infoSwiperTextGroup = ['시험분석', '품질검사', '기업지원', '제품인증ㆍ안전'];

const infoSwiper = new Swiper('.global-swiper--info', {
    pagination: {
        el: '.info__pagination .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + infoSwiperTextGroup[index] + "</span>";
        },
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 700,
});

gallerySwiper.controller.control = infoSwiper;
infoSwiper.controller.control = gallerySwiper;
