const adSlides = document.querySelectorAll('.ad-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    adSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % adSlides.length;
    showSlide(currentSlide);
}

// Automatically switch slides every 10 seconds
setInterval(nextSlide, 10000);
