//1. Verificamos si el usuario esta logeado
let loginStatus = localStorage.getItem("loginStatus");

//2. Si no esta logeado, redirigimos a la pagina de login
if (loginStatus !== "true") {
    window.location.href = "./index.html";
}