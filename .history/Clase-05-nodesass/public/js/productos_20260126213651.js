

// 1. capturamos el elemento principal

const divPrincipal = document.getElementById("principal");

// 2. Creamos la barra de navegación
let navegación = document.createElement('nav');

// 3. le agregamos estilos

navegación.style.backgroundColor = '#2c0c64 ';
navegación.style.width = '100%';
navegación.style.height = '60px';

//4. Agregamos barra de navegacion al div principal
divPrincipal.appendChild(navegación);

//5. agregamos un evento a la navegacion
navegación.addEventListener('click', () => {
    alert('Hola, soy la barra de navegación');
});
