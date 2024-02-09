const btn = document.getElementById('article__button--open');
const btn2 = document.getElementById('article__button--close');
const txt = document.getElementById('description');


// abrir boton +
btn.addEventListener('click', (e) => {
    const btnOpen = e.target.closest('button');

    if (btnOpen?.dataset?.action === "open-text") {
        btn.classList.add('article__button--open__disabled');
        txt.classList.remove('article__text--disabled');
        btn2.classList.remove('article__button--close__disabled');
    }


    btn2.addEventListener('click', (e) => {
        const btnClose = e.target.closest('button');

        if (btn2?.dataset?.action === 'close-text') {
            btn.classList.remove('article__button--open__disabled');
            txt.classList.add('article__text--disabled');
            btn2.classList.add('article__button--close__disabled');
        }

    });





    // if (btn?.dataset?.action === 'open-text') {
    //     // eliminar vista boton +
    //     btn.classList.add('article__button--open__disabled');
    //     // mostrar parrafo
    //     txt.classList.remove('article__text--disabled');
    //     console.log('borrado');

    // } else if (btn?.dataset?.action === 'close-text') {
    //     btn.classList.add('article__button--open__disabled');
    //     txt.classList.add('article__button--open__disabled');
    //     btnOpen.classList.remove('article__button--open__disabled');

    //     console.log('cerrado');

    // }
});








// // button.addEventListener('click', ()={
// //     console.log('click')
// // })
// // const collapse = () => {
// //     if (true) {
// //         const openAnswer = button.className.add('article__button--active')
// //     }else{
// //         const closeAnswer = button.className.remove('article__button--active')
// //     }
// //     return
// // };

// // export default collapse()


// otro
