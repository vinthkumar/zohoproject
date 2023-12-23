// form alert

function myalert() {
    alert("Form data send Successfully")
}

// mobile navigation

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// faq answer section

function faqclick(ansId) {
    var div = document.getElementById(ansId);
    var style = window.getComputedStyle(div);

    if (style.display === 'none') {
        document.querySelectorAll('.ans').forEach(function (ans) {
            ans.style.display = 'none';
        });
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

// image carousel

const images = document.querySelectorAll('.firstimage img');
const totalImages = images.length;
const sliderDotsContainer = document.getElementById('slider-dots');


for (let i = 0; i < totalImages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', () => goToImage(i));
    sliderDotsContainer.appendChild(dot);
}


function showImage(index) {
    images.forEach(img => img.style.display = 'none');
    images[index % totalImages].style.display = 'block';

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index % totalImages].classList.add('active');
}

function nextImage() {
    currentIndex++;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    showImage(currentIndex);
}

function goToImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

setInterval(nextImage, 3000);

// testimonial

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial1');
const testimonialsToShowDesktop = 3;
const testimonialsToShowMobile = 2;

function showTestimonials() {
    const testimonialsToShow = window.innerWidth < 768 ? testimonialsToShowMobile : testimonialsToShowDesktop;

    testimonials.forEach((testimonial, index) => {
        const isVisible = index >= currentIndex && index < currentIndex + testimonialsToShow;
        testimonial.style.display = isVisible ? 'block' : 'none';
    });
}

function nextTestimonial() {
    const totalTestimonials = testimonials.length;
    const testimonialsToShow = window.innerWidth < 768 ? testimonialsToShowMobile : testimonialsToShowDesktop;

    currentIndex = (currentIndex + 1) % (totalTestimonials - testimonialsToShow + 1);
    showTestimonials();
}

function prevTestimonial() {
    const totalTestimonials = testimonials.length;
    const testimonialsToShow = window.innerWidth < 768 ? testimonialsToShowMobile : testimonialsToShowDesktop;

    currentIndex = (currentIndex - 1 + totalTestimonials) % (totalTestimonials - testimonialsToShow + 1);
    showTestimonials();
}

showTestimonials();


const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

arrowRight.addEventListener('click', () => {
    nextTestimonial();
});

arrowLeft.addEventListener('click', () => {
    prevTestimonial();
});

window.addEventListener('resize', () => {
    currentIndex = 0;
    showTestimonials();
});

