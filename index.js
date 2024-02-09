const btn = document.getElementById('article__button--open');
const btn2 = document.getElementById('article__button--close');
const txt = document.getElementById('description');

// Funciona solo en el primer boton
// abrir boton + y abrir texto
btn.addEventListener('click', (e) => {
    const btnOpen = e.target.closest('button');

    if (btnOpen?.dataset?.action === "open-text") {
        btn.classList.add('article__button--open__disabled');
        txt.classList.remove('article__text--disabled');
        btn2.classList.remove('article__button--close__disabled');
    }

    // cerrar botón "-" y texto
    btn2.addEventListener('click', (e) => {
        const btnClose = e.target.closest('button');

        if (btnClose?.dataset?.action === 'close-text') {
            btn.classList.remove('article__button--open__disabled');
            txt.classList.add('article__text--disabled');
            btn2.classList.add('article__button--close__disabled');
        }

    });


});



