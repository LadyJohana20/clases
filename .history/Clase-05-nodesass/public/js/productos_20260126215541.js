

// 1. capturamos el elemento principal

const divPrincipal = document.getElementById("principal");

// 2. Creamos la barra de navegación
let navegación = document.createElement('nav');

// 3. le agregamos estilos

navegación.style.backgroundColor = '#2c0c64 ';
navegación.style.width = '100%';
navegación.style.height = '60px';
navegación.style.display = 'flex';
navegación.style.alignItems = 'center';
navegación.style.paddingLeft = '20px';

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
lisHome.style.color = 'white';
lisHome.style.cursor = 'pointer';
lisHome.addEventListener("click", () => {
    window.location.href = '../index.html';
});

//8. creamos el ancla del primer item
/*let anclaHome = document.createElement('a');
anclaHome.href = '../pages/index.html';*/

// agregamos el ancla a la barra de navegación
/*lisHome.appendChild(anclaHome);*/

//9. agregamos el primer item a la lista
listaNavegacion.appendChild(lisHome);

//10. subimos el ul a la barra de navegación
navegación.appendChild(listaNavegacion);

let lisProductos = document.createElement('li');
let lisFormulario = document.createElement('li');
