function slider(){
    //Работа со слайдером

    let slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dots = document.querySelectorAll('.dot'),
    dotsWrap = document.querySelector('.slider-dots'),
    slideIndex = 1;

    //Функция отражения
    function showSlides(n){
        if(n>slides.length){
        slideIndex = 1;
        }

        if(n<1){
        slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));

        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    showSlides(slideIndex);

    function plusSlide(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    next.addEventListener('click', function(){
        plusSlide(1);
    })

    prev.addEventListener('click', function(){
        plusSlide(-1);
    });

    dotsWrap.addEventListener('click', function(event){
        for(let i = 0; i < slides.length+1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
            currentSlide(i);
            }
        }
    });
}
module.exports = slider;