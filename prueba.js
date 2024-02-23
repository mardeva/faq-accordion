const btnOpen = document.querySelectorAll('.article__button--open');
const btnClose = document.querySelectorAll('.article__button--close__disabled');
const answer = document.querySelectorAll('.article__text');


for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', function () {        
        btnOpen[i].classList.toggle('article__button--open__disabled');
        btnClose[i].classList.toggle('article__button--close__disabled');
        answer[i].classList.toggle('article__text--disabled');
    });

}

for (let i = 0; i < btnClose.length; i++) {

    btnClose[i].addEventListener('click', function () {
        btnOpen[i].classList.toggle('article__button--open__disabled');
        btnClose[i].classList.toggle('article__button--close__disabled');
        answer[i].classList.toggle('article__text--disabled');
    });

}