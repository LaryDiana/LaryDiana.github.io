const carousel = document.querySelector('.carousel');

carousel.addEventListener('wheel', (event) => {
    event.preventDefault();
    carousel.scrollLeft += event.deltaY * 2;  // Controlează viteza scroll-ului
});
