window.addEventListener('load', function(){

    let nombre = document.querySelector('#name');

    let descripcion = document.querySelector('#description');

    let imagen = document.querySelector('#image');

    let errorName = document.querySelector('.errorName');

    let errorDescription = document.querySelector('.errorDescription');

    let errorImagen = document.querySelector('.errorImagen');

    nombre.addEventListener('mouseleave', function(){
        if (nombre.value == "") {
            errorName.innerText = "El nombre del producto es obligatorio"
        } else if  (nombre.value.length < 3) {
            errorName.innerText = "El campo debe tener al menos tres caracteres"
        } else {
            errorName.innerText = "";
        }
    })

    descripcion.addEventListener('mouseleave', function(){
        if (descripcion.value == "") {
            errorDescription.innerText = "La descripción del producto es obligatoria"
        } else if (descripcion.value.length < 20) {
            errorDescription.innerText = "La descripción debe tener al menos veinte caracteres"
        } else {
            errorDescription.innerText = "";
        }
    })
    
    imagen.addEventListener('mouseleave', function(){
        if (imagen.value == "") {
            errorImagen.innerText = "Los archivos válidos son .JPG, .JPEG, .PNG y .GIF"
        } else {
            errorImagen.innerText = "";
        } 
    })

})