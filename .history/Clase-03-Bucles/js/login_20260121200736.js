
/* Ejemplo de comentario de cabecera de un archivo JS:
** Archivo login.js
** Parametros: No tiene
** Descripcion: Archivo para la logica del login
** Autor: Bernardo Martinez
** Fecha de creacion: 2024-06-10
** Ultima modificacion: 2024-06-10
*/  


//1. capaturamos el  formulario
let formulario = document.getElementById("formulario");

//2. agregamos el evento al formulario

formulario.addEventListener("submit", function(event) {

  console.log(event);
  event.preventDefault(); // evita que se recargue la pagina
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //credenciales validas
  let emailValido = "admin@bootcamp.com";
  let passwordValido = "12345678";

  //validamos que los datos no esten vacios
  if(email === "" || password === ""){
    alert("El email y la contraseña no pueden estar vacios");
    return; // corta la ejecución de la función para que continue  con el resto del codigo
  }
  
  //validacion de longitud de password
  else if(password.length < 8){
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }
  
 if (email === "pepe@gmail.com" && password === "12345678") {
    alert("Login exitoso");
    window.location.href = "../pages/productos.html";
    
  }

 
  alert("Formulario enviado");


})



//2. Login con la función onclick

function login() {
  alert("Login con onclick"); 
  formulario.reset();
}