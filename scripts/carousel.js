let auto = true;
let slidePosition = 1;
slideShowAuto();
slideShow(slidePosition);

function plusSlide(n) {
    auto = false;
    slideShow(slidePosition += n);
}

function currentSlide(n) {
    auto = false;
    slideShow(slidePosition = n);
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("containers");
    let circles = document.getElementsByClassName("dots");
    if (n > slides.length) {
        slidePosition = 1;
    }
    if (n < 1) {
        slidePosition = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
}

function slideShowAuto() {
    let i;
    let slides = document.getElementsByClassName("containers");
    let circles = document.getElementsByClassName("dots");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slidePosition++;
    if (slidePosition > slides.length) {
        slidePosition = 1;
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
    setTimeout(() => {
        if (auto) {
            slideShowAuto();
        }
    }, 5000);
}
