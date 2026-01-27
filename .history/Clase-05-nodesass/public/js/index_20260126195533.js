console.log('BIENVENIDO AL FRONT DE LA APP');


//Crear una función para el login de un usuario.


//manejo del DOM
let loginForm = document.getElementById('loginForm');
const loginUser = (e) => { 
    e.preventDefault(); //evitar que se recargue la página

    console.log("Iniciando login...");
    
    //capturar los datos del formulario
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    //crear el objeto con los datos
    let adminUser= "admin@bootcamp.com";
    let adminPassword= "admin123";

    //creamos logica de validación

    if(email === adminUser && password === adminPassword){
        console.log("Login exitoso");
        alert("Login exitoso");

        window.location.href = "/Clase-05-nodesass/public/pages/formulario.html"; //redireccionar a formulario

    } else {
        console.log("Credenciales Invalidas");
        alert("Credenciales Invalidas, por favor intente nuevamente.");

        }


    }
    loginForm.addEventListener('submit', loginUser);

    



