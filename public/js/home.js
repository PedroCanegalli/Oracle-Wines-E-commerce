const listaPremiados = document.querySelector('.lista-premiados');
const botonDerecha = document.querySelector('#boton-derecha');
const botonIzquierda = document.querySelector('#boton-izquierda');

botonDerecha.addEventListener('click',()=>{
    listaPremiados.scrollLeft += 20;

})

botonIzquierda.addEventListener('click',()=>{
    listaPremiados.scrollLeft = listaPremiados.scrollLeft - 250;

})
