window.addEventListener('load', function(){

    const listaPremiados = document.getElementById('lista-premiados');
    const botonDerecha = document.getElementById('boton-derecha');
    const botonIzquierda = document.getElementById('boton-izquierda');
    const carrusel = document.getElementById('carrusel');

    botonDerecha.addEventListener('click', function(){
        carrusel.scrollLeft += 250;

    })

    botonIzquierda.addEventListener('click',()=>{
        carrusel.scrollLeft -= 250;

    })

})
