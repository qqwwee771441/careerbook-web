var slider = document.querySelector(".slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");
var sliderWidth = window.innerWidth;
var defaultLength = slide.length;

var currentSlide = 0;

window.addEventListener('resize', function() {
    sliderWidth = window.innerWidth;
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
    var cloneFirst = slides.firstElementChild.cloneNode(true);
    var from = -(sliderWidth * currentSlide);
    var to = from - sliderWidth;

    if(document.querySelectorAll(".slide").length > defaultLength) {
        slides.removeChild(slides.lastElementChild);
    }
    
    if(currentSlide === slide.length - 1) {
        slides.appendChild(cloneFirst);
        sliding(slides, from, to);
        currentSlide = 0;
    }
    else {
        sliding(slides, from, to);
        currentSlide++;
    }

    updatePageIndicator();
}

function prev() {    
    var cloneLast = slides.lastElementChild.cloneNode(true);
    var from = -(sliderWidth * currentSlide);
    var to = from + sliderWidth;
    
    if(document.querySelectorAll(".slide").length > defaultLength) {
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
for(let i = 0; i < defaultLength; i++) {
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
        } else {
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

var isDragging = false;
var startX = 0;
var currentX = 0;

slider.addEventListener("mousedown", function(event) {
    isDragging = true;
    startX = event.clientX;
});

slider.addEventListener("mousemove", function(event) {
    if (isDragging) {
        currentX = event.clientX;
        var diff = currentX - startX;
        slides.style.marginLeft = (-sliderWidth * currentSlide + diff) + "px";
    }
});

slider.addEventListener("mouseup", function(event) {
    isDragging = false;
    var diff = currentX - startX;
    if (diff < -sliderWidth / 2) {
        next();
    } else if (diff > sliderWidth / 2) {
        prev();
    } else {
        sliding(slides, -sliderWidth * currentSlide, -sliderWidth * currentSlide);
    }
});

slider.addEventListener("touchstart", function(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", function(event) {
    if (isDragging) {
        currentX = event.touches[0].clientX;
        var diff = currentX - startX;
        slides.style.marginLeft = (-sliderWidth * currentSlide + diff) + "px";
    }
});

slider.addEventListener("touchend", function(event) {
    isDragging = false;
    var diff = currentX - startX;
    if (diff < -sliderWidth / 2) {
        next();
    } else if (diff > sliderWidth / 2) {
        prev();
    } else {
        sliding(slides, -sliderWidth * currentSlide, -sliderWidth * currentSlide);
    }
});