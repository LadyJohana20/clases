

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
/*navegación.addEventListener('click', () => {
    alert('Hola, soy la barra de navegación');
});*/

//6. Creamos la lista de navegación
let listaNavegacion = document.createElement('ul');

//7. creamos los 3 items de la lista
let lisHome = document.createElement('li');
lisHome.innerText = 'Home';
lisHome.style.display = 'inline';
lisHome.style.margin = '20px';
lisHome.style.color = 'white';
lisHome.style.cursor = 'pointer';

//8. creamos el ancla del primer item
let anclaHome = document.createElement('a');
anclaHome.href = '../pages/index.html';
// agregamos el ancla a la barra de navegación
anclaHome.appendChild(lisHome);

//9. agregamos el primer item a la lista
listaNavegacion.appendChild(lisHome);

let lisProductos = document.createElement('li');
let lisFormulario = document.createElement('li');
