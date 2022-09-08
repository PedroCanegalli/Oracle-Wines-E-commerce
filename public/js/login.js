window.addEventListener('load', function(){
   
    let email = document.querySelector('.email');

    let password = document.querySelector('.password');

    let errorEmail = document.querySelector('.errorEmail');

    let errores = [];
    email.addEventListener('mouseleave', function(event){
        if(email.value == ""){
            errorEmail.innerText = "El campo email no puede estar vacío"
        } else {
            errorEmail.innerText = "";
        }
    });

    let form = document.querySelector('.login-form');


    form.addEventListener('submit', function(event){
        let em = email.value;
        event.preventDefault();
        const validateEmail = (em) => {
            return String(em)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          };
          console.log(validateEmail(em));
    })
})
