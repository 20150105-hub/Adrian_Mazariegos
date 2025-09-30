const slides = document.getElementById('slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicatorsContainer = document.getElementById('indicators');

let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// Crear bolitas dinámicamente
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
    indicatorsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function showSlide(i) {
    if (i < 0) {
        index = totalSlides - 1;
    } else if (i >= totalSlides) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
}

prevBtn.addEventListener('click', () => {
    index--;
    showSlide(index);
});

nextBtn.addEventListener('click', () => {
    index++;
    showSlide(index);
});

// Auto-play cada 5 segundos
setInterval(() => {
    index++;
    showSlide(index);
}, 5000);

// Carrusel de productos
const slidesProductos = document.getElementById('slides-productos');
const prevProductos = document.getElementById('prev-productos');
const nextProductos = document.getElementById('next-productos');

let indexProductos = 0;

function showSlideProductos(n) {
    const totalSlides = slidesProductos.children.length;
    if (n < 0) indexProductos = totalSlides - 1;
    else if (n >= totalSlides) indexProductos = 0;
    else indexProductos = n;

    slidesProductos.style.transform = `translateX(-${indexProductos * 20}%)`;
}
