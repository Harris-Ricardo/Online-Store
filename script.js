// Select elements
const adBanner = document.querySelector('.ad-banner');
const adSlides = document.querySelectorAll('.ad-slide');

// Initialize variables
let currentSlide = 0;
const slideInterval = 10000; // 10 seconds

// Function to show a slide
function showSlide(slideIndex) {
  // Loop through all slides
  adSlides.forEach((slide, index) => {
    // Calculate the translation value based on the slide index
    const translationValue = 100 * (index - slideIndex);

    // Set the transformation style of the slide
    slide.style.transform = `translateX(${translationValue}%)`;
  });
}

// Show the initial slide
showSlide(currentSlide);

// Set up the slide interval
setInterval(() => {
  // Increment the current slide index
  currentSlide = (currentSlide + 1) % adSlides.length;

  // Show the next slide
  showSlide(currentSlide);
}, slideInterval);