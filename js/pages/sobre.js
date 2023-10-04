new Swiper(".sobre__depoimentos .swiper", {
    loop: true,
    speed: 800,
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        1080: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
})