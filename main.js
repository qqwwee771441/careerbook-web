var slider = document.querySelector(".slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");
var sliderWidth = window.innerWidth;

var currentSlide = 0;

window.addEventListener('resize', function() {
    sliderWidth = window.innerWidth;
});

function next() {
    var from = -(sliderWidth * currentSlide);
    var to = from - sliderWidth;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    
    currentSlide++;
    if (currentSlide === slide.length) {
        currentSlide = 0;
    }
}

function prev() {    
    var from = -(sliderWidth * currentSlide);
    var to = from + sliderWidth;
    slides.animate({
        marginRight: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
}

setInterval(prev, 3000);