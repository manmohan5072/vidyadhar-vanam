// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    navigation: {
        nextEl: '.swiper-button-next', // Selects the next button element
        prevEl: '.swiper-button-prev', // Selects the previous button element
    },
    autoplay: {
        delay: 3000, // Slide change every 3 seconds
        disableOnInteraction: false, // Continue autoplay after interaction
    },
    speed: 600, // Transition speed between slides (600ms)
});
