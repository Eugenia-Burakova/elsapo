(function() {

    const slides = [
        `<div class="about-elsapo__carousel-slide">
        <img class="about-elsapo__carousel-slide-img" src="img/about-elsapo/about-elsapo-carousel-slide-first.jpg" alt="fresh fish and vegetables">
        </div>`,

        `<div class="about-elsapo__carousel-slide">
        <img class="about-elsapo__carousel-slide-img" src="img/about-elsapo/about-elsapo-carousel-slide-second.jpg" alt="rainbow vegetables">
        </div>`,

        `<div class="about-elsapo__carousel-slide">
        <img class="about-elsapo__carousel-slide-img" src="img/about-elsapo/about-elsapo-carousel-slide-third.jpg" alt="colorful fruits">
        </div>`,

        ` <div class="about-elsapo__carousel-slide">
        <img class="about-elsapo__carousel-slide-img" src="img/about-elsapo/about-elsapo-carousel-slide-fourth.png" alt="groats">
        </div>`
    ]

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.about-elsapo__carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.about-elsapo__carousel-next')
         .addEventListener('click', showNextSlide);

    document.querySelector('.about-elsapo__carousel-prev')
         .addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000);

})();