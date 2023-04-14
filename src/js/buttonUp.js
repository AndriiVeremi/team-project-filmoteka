import getRefs from './refs.js';
const refs = getRefs();

window.addEventListener("scroll", trackScroll);
refs.goTopBtn.addEventListener("click", goTop);

function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {       
        refs.goTopBtn.classList.add("go-top--show");
    } else {
        refs.goTopBtn.classList.remove("go-top--show");
    }
}

function goTop() { 
    if (window.pageYOffset > 0) {       
        window.scrollBy(0, -65); 
        setTimeout(goTop, 0); 
    }
}

