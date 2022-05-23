/* Init Swiper */
const slider = document.querySelector('.mySwiper');

let swiper = new Swiper(slider, {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

function showHide() {
    const hide = document.querySelectorAll('.hide');
    const btnShowText = document.querySelector('.btn-show > span');

    for (var i = 0; i < hide.length; i++) {
        if (hide[i].style.display === 'none') {
            hide[i].style.display = 'flex';
            btnShowText.textContent = 'Скрыть';
        } else {
            hide[i].style.display = 'none';
            btnShowText.textContent = 'Показать все';
        }
    }
}

const tabletopScreen = window.matchMedia("(min-width:1120px");
if(tabletopScreen.matches) {
    var laptop = document.querySelectorAll('.laptop');
    for (var i = 0; i < laptop.length; i++) {
        laptop[i].classList.remove('hide');
    }
}