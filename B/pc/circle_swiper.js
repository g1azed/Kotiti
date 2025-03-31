
/* //////////////////////////////////////////////////////// */
// Circle swiper
const circleSwiper = new Swiper('.global-swiper--circle', {
    slidesPerView: 'auto',
    slidesOffsetBefore: -220,
    slidesOffsetAfter: 220,
    speed: 1000,
    allowTouchMove: false,
});

const gallerySwiperSlide = document.querySelectorAll('.global-swiper--gallery .swiper-slide');

let gallerySwiper;

function initGallerySwiper() {
    if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
    }

    if (window.matchMedia("(min-width: 1200px)").matches) {
        gallerySwiper = new Swiper('.global-swiper--gallery', {
            grabCursor: true,
            navigation: {
                nextEl: '.global__navigator .swiper-button-next',
                prevEl: '.global__navigator .swiper-button-prev',
            },
            effect: 'creative',
            creativeEffect: {
                prev: { translate: [0, 0, -1] },
                next: { translate: ['100%', 0, 0] },
            },
            speed: 500,
            on: {
                slideChange: function (el) {
                    document.querySelectorAll('.global-swiper--gallery .swiper-slide').forEach((item) => {
                        item.style.transitionDelay = (el.activeIndex > el.previousIndex) ? '300ms' : '50ms';
                    });
                    circleSwiper.slideTo(el.activeIndex);
                },
            },
        });
    } else {
        gallerySwiper = new Swiper('.global-swiper--gallery', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: -50,
            speed: 500,
        });
    }

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
    // infoSwiper와 다시 연결
    gallerySwiper.controller.control = infoSwiper;
    infoSwiper.controller.control = gallerySwiper;
}

initGallerySwiper();

window.addEventListener('resize', () => {
    initGallerySwiper();
});

