const btnOpen = document.getElementById('article__button--open');
const btnClose = document.getElementById('article__button--close');

const txt = document.getElementById('description');



// abrir boton +
btnOpen.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    console.log(btn);

    if (btn?.dataset?.action === 'open-text') {
        // eliminar vista boton +
        btn.classList.add('article__button--open__disabled');
        // mostrar parrafo
        txt.classList.remove('article__text--disabled');
        console.log('borrado');

    }
});

//CERRAR
btnClose.addEventListener('click', (e) => {
    

    const btn = e.target.closest('button');

    console.log('boton cerrar: ' + btn);

    if (btn?.dataset?.action === 'close-text') {

        btn.classList.add('article__button--open__disabled');
        txt.classList.add('article__button--open__disabled');        
        btnOpen.classList.remove('article__button--open__disabled')
        
        
        console.log('cerrado');
        
    }



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
