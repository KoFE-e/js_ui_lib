import $ from "../core";

$.prototype.carousel = function(dotsEnabled = true, arrowsEnabled = true) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].querySelector('.carousel-inner')) {
            const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
            const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        if (arrowsEnabled) {
            $(this[i].querySelector('[data-slide="next"]')).click((e) => {
                e.preventDefault();
    
                if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                    offset = 0;
                } else {
                    offset += +width.replace(/\D/g, '');
                }
    
                slidesField.style.transform = `translateX(-${offset}px)`;
    
                if (slideIndex == slides.length - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
    
                if (dotsEnabled) {
                    dots.forEach(dot => {
                        dot.classList.remove('active');
                    });
                    dots[slideIndex].classList.add('active');
                }
            });
    
            $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
                e.preventDefault();
    
                if (offset == 0) {
                    offset = +width.replace(/\D/g, '') * (slides.length - 1)
                } else {
                    offset -= +width.replace(/\D/g, '');
                }
    
                slidesField.style.transform = `translateX(-${offset}px)`;
    
                if (slideIndex == 0) {
                    slideIndex = slides.length - 1;
                } else {
                    slideIndex--;
                }
                
                if (dotsEnabled) {
                    dots.forEach(dot => {
                        dot.classList.remove('active');
                    });
                    dots[slideIndex].classList.add('active');
                }
            });
        }

        if (dotsEnabled) {
            const sliderId = this[i].getAttribute('id');
            $(`#${sliderId} .carousel-indicators li`).click((e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;
                offset = +width.replace(/\D/g, '') * slideTo;

                slidesField.style.transform = `translateX(-${offset}px)`;

                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                dots[slideIndex].classList.add('active');
            });
        }
        }
    }
};

$('.carousel').carousel();

$.prototype.createCarousel = function({dots, arrows, count, content} = {}) {
    for (let i = 0; i < this.length; i++) {

        const imgs = [];
        for (let j = 0; j < count; j++) {
            let item = document.createElement('div');
            item.classList.add('carousel-item');
            let img = document.createElement('img');
            img.src = content[j];
            img.alt = j;

            item.append(img);

            imgs.push(item);
        }

        this[i].innerHTML = `
            <div class="carousel-inner">
                <div class="carousel-slides">
                
                </div>
            </div>
        `;

        if (dots) {
            const indicators = document.createElement('ol');
            indicators.classList.add('carousel-indicators');
            for (let j = 0; j < count; j++) {
                const listItem = document.createElement('li');
                if (j == 0) listItem.classList.add('active');
                listItem.setAttribute('data-slide-to', j);
                indicators.append(listItem);
            }
            this[i].append(indicators);
        }
        
        if (arrows) {
            this[i].insertAdjacentHTML('beforeend', `
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
            `)
        }

        if (content && count > 0) {
            this[i].querySelector('.carousel-slides').append(...imgs);
        }

        $(this[i]).carousel(dots, arrows);
    }
};