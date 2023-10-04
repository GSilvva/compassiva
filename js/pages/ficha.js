new Swiper(".ficha__images .swiper", {
    loop: true,
    spaceBetween: 8,
    breakpoints: {
        300: {
            slidesPerView: 1.1
        },
        1080: {
            slidesPerView: 4
        }
    }
})

document.querySelector(".ficha__plus__share button").addEventListener("click", () => document.querySelector(".ficha__plus__share").classList.toggle("open"))