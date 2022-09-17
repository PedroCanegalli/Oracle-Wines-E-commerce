window.addEventListener("load", function(){
      
    let campoNombre = document.querySelector("#name");

    let campoEmail = document.querySelector("#email");

    let campoContra = document.querySelector("#password");

    let campoImagen = document.querySelector("#picture");


    let erroresName = document.querySelector(".erroresName");

    let erroresEmail = document.querySelector(".erroresEmail");

    let erroresContra = document.querySelector(".erroresContra");

    let erroresImagen = document.querySelector(".erroresImagen");
    

    campoNombre.addEventListener("mouseleave", function(){
        if (campoNombre.value == "") {
            console.log("entro aqui")
            erroresName.innerText = "El campo de nombre y apellido es obligatorio"
        } else if  (campoNombre.value.length < 2) {
            erroresName.innerText = "El campo debe tener al menos dos caracteres"
        } else {
            erroresName.innerText = "";
        }
    })
    
    campoEmail.addEventListener("mouseleave", function(e){
        if (campoEmail.value == "") {
            erroresEmail.innerText = "El campo de email es obligatorio"
        } else{
            erroresEmail.innerText = "";
          } 
    })

    campoEmail.addEventListener('mouseleave', function(event){
        let em = email.value;
        //event.preventDefault();
        const validateEmail = (em) => {
            return String(em)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
          console.log(validateEmail(em));
          if(validateEmail(em) ==null){
            erroresEmail.innerText = "El formato de email no es válido"
          }else{
            erroresEmail.innerText = "";
          } 
    })

    campoContra.addEventListener("mouseleave", function(e){
        if (campoContra.value == "") {
            erroresContra.innerText = "El campo de contraseña es obligatorio"
        } else if (campoContra.value.length < 8) {
            erroresContra.innerText = "El campo debe tener al menos ocho caracteres"
        } else {
            erroresContra.innerText = "";
          } 
    })

    campoImagen.addEventListener("mouseleave", function(e){
        if (campoImagen.value == "") {
            erroresImagen.innerText = "El archivo debe ser válido (JPG, JPEG, PNG, GIF)"
        } else {
            erroresImagen.innerText = "";
          } 
    })

}) 
