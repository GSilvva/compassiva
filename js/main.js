// NAV 
const nav = document.querySelector(".nav")
const search = nav.querySelector(".nav__menu__actions__search > button")
const button = nav.querySelector(".nav__menu__actions__button")
const close = nav.querySelectorAll("[data-close]")
const btnTop = document.querySelector("[data-top]")
const events = ["DOMContentLoaded", "scroll", "load"]

events.forEach(eventHandler => {
    window.addEventListener(eventHandler, () => {
        if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
            nav.classList.add("nav--fixed")
            btnTop.classList.add("visible")
        } else {
            nav.classList.remove("nav--fixed")
            btnTop.classList.remove("visible")
        }
    })
})

search.addEventListener("click", () => nav.classList.toggle("nav--search"))

btnTop.addEventListener("click", () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

button.addEventListener("click", () => nav.classList.toggle("nav--open"))

close.forEach(btn => btn.addEventListener("click", () => nav.classList.remove("nav--open")))