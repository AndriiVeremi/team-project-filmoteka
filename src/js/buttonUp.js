// считываем кнопку
const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.pageYOffset;
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // если вышли за пределы первого окна
    if (scrolled > coords) {
        // кнопка появляется
        goTopBtn.classList.add("go-top--show");
    } else {
        // иначе исчезает
        goTopBtn.classList.remove("go-top--show");
    }
}

function goTop() {
    // пока не вернулись в начало страницы
    if (window.pageYOffset > 0) {
        // скроллим наверх
        window.scrollBy(0, -75); // второй аргумент - скорость
        setTimeout(goTop, 0); // входим в рекурсию
    }
}

