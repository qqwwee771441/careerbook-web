var slider = document.querySelector(".slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");
var sliderWidth = window.innerWidth;

var cloneFirst = slides.firstElementChild.cloneNode(true);
var cloneLast = slides.lastElementChild.cloneNode(true);

var currentSlide = 0;

window.addEventListener('resize', function() {
    sliderWidth = window.innerWidth;

    var from = -(sliderWidth * (currentSlide - 1));
    var to = from - sliderWidth;

    sliding(slides, from, to);
});

function sliding(slides, from, to) {
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
}

function next() {   
    var from = -(sliderWidth * currentSlide);
    var to = from - sliderWidth;

    if(slides.lastElementChild.innerHTML === cloneFirst.innerHTML) {
        slides.removeChild(slides.lastElementChild);
    }

    if(slides.firstElementChild.innerHTML === cloneLast.innerHTML) {
        slides.removeChild(slides.firstElementChild);
    }
    
    if(currentSlide === slide.length - 1) {
        slides.appendChild(cloneFirst);
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }

    sliding(slides, from, to);
    updatePageIndicator();
}

function prev() {
    var from = -(sliderWidth * currentSlide);
    var to = from + sliderWidth;
    
    if(slides.lastElementChild.innerHTML === cloneFirst.innerHTML) {
        slides.removeChild(slides.lastElementChild);
    }
    
    if(slides.firstElementChild.innerHTML === cloneLast.innerHTML) {
        slides.removeChild(slides.firstElementChild);
    }

    if(currentSlide === 0) {
        slides.insertBefore(cloneLast, slides.firstElementChild);
        from = -(sliderWidth * (currentSlide + 1));
        to = from + sliderWidth;
        sliding(slides, from, to);
        currentSlide = slide.length - 1;
    }
    else {
        sliding(slides, from, to);
        currentSlide--;
    }

    updatePageIndicator();
}

var pageIndicator = slider.querySelector(".page-indicator");
for(let i = 0; i < slide.length; i++) {
    var li = document.createElement("li");
    if(i == 0) {
        li.className = "active";
    }
    pageIndicator.appendChild(li);
}

function updatePageIndicator() {
    var indicators = slider.querySelectorAll(".page-indicator li");
    indicators.forEach(function(indicator, index) {
        if (index === currentSlide) {
            indicator.classList.add("active");
        }
        else {
            indicator.classList.remove("active");
        }
    });
}

var slideInterval = setInterval(next, 3000);
slider.addEventListener("mouseenter", function() {
    clearInterval(slideInterval);
});
slider.addEventListener("mouseleave", function() {
    slideInterval = setInterval(next, 3000);
});

var startX = 0;
var currentX = 0;

slider.addEventListener("mousedown", function(event) {
    startX = event.clientX;
});

slider.addEventListener("mouseup", function(event) {
    currentX = event.clientX;
    if(startX < currentX) {
        prev();
    }
    else {
        next();
    }
});

slider.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
});

slider.addEventListener("touchend", function(event) {
    currentX = event.touches[0].clientX;
    if(startX < currentX) {
        prev();
    }
    else {
        next();
    }
});

function signin() {
    window.location.href = "signin.html";
}

function signup() {
    window.location.href = "signup.html";
}