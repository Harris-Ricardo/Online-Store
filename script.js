const adSlides = document.querySelectorAll('.ad-slide');
let currentSlide = 0;
const slideInterval = 10000; // 10 seconds

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
setInterval(nextSlide, slideInterval);

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        currentSlide = (currentSlide - 1 + adSlides.length) % adSlides.length;
        showSlide(currentSlide);
    }
});