const swiper1 = new Swiper('.swiper1', {
    // Optional parameters for swiper1
    direction: 'vertical',
    loop: true,

    // If we need pagination for swiper1
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows for swiper1
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar for swiper1
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// 추가하고 싶은 swiper2에 대한 설정
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters for swiper2
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2500, // 자동 슬라이드 지연 시간 (ms)
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생
    },
});