const props = {
    speed: 800,
    grabCursor: true,
    loop: true,
    breakpoints: {
        300: {
            slidesPerGroupSkip: 1,
            slidesPerView: 1
        },
        640: {
            slidesPerGroupSkip: 2,
            slidesPerView: 2
        },
        1080: {
            slidesPerGroupSkip: 3,
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
}

new Swiper(".home__cards--1 .swiper", {
    ...props,
    pagination: {
        el: ".home__cards--1 .swiper-pagination",
        clickable: true
    },
    navigation: {
        prevEl: ".home__cards--1 .swiper-prev",
        nextEl: ".home__cards--1 .swiper-next"
    }
})

new Swiper(".home__cards--2 .swiper", {
    ...props,
    pagination: {
        el: ".home__cards--2 .swiper-pagination",
        clickable: true
    },
    navigation: {
        prevEl: ".home__cards--2 .swiper-prev",
        nextEl: ".home__cards--2 .swiper-next"
    }
})

new Swiper(".home__depoimentos .swiper", {
    loop: true,
    spaceBetween: 16,
    speed: 800,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        prevEl: ".home__depoimentos .swiper-prev",
        nextEl: ".home__depoimentos .swiper-next"
    }
})