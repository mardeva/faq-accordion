const btnOpen = document.getElementById('article__button--open');
const btnClose = document.getElementById('article__button--close');
const txt = document.getElementById('description');

const contenedorArticulos = document.getElementById('section__container--articles');

contenedorArticulos.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.closest('button'))
    const boton = e.target.closest('button')
    // if (e.target.closest('button')) {

    //     //quito vista boton +
    //     btnOpen.classList.add('article__button--open__disabled');
    //     //muestro texto respuesta
    //     txt.classList.remove('article__text--disabled');
    //     //agrego vista boton -
    //     btnClose.classList.remove('article__button--close__disabled');

    //     console.log(typeof contenedorArticulos)
    //     console.log(e.target.dataset.action)

    //     const tipoBoton = e.target.dataset.action
    //     console.log(tipoBoton)
        
    // }
    
});





// // Funciona solo en el primer boton
// // abrir boton + y abrir texto
// btn.addEventListener('click', (e) => {
//     const btnOpen = e.target.closest('button');

//     console.log(typeof btnOpen);

//     const abrir = () => {
//         if (btnOpen?.dataset?.action === "open-text") {
//             btn.classList.add('article__button--open__disabled');
//             txt.classList.remove('article__text--disabled');
//             btn2.classList.remove('article__button--close__disabled');
//         }
//     };

//     abrir();
//     console.log('la funcion abrir funciona!');

//     // cerrar botón "-" y texto
//     const cerrar = () => {
//         btn2.addEventListener('click', (e) => {
//             const btnClose = e.target.closest('button');

//             if (btnClose?.dataset?.action === 'close-text') {
//                 btn.classList.remove('article__button--open__disabled');
//                 txt.classList.add('article__text--disabled');
//                 btn2.classList.add('article__button--close__disabled');
//             }
//         });
//     };
//     cerrar();


// });

