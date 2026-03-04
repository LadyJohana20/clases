

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


let lisProductos = document.createElement('li');
lisProductos.innerText = 'Productos';
lisProductos.style.display = 'inline';
lisProductos.style.color = 'white';
lisProductos.style.marginLeft = '20px';
lisProductos.style.cursor = 'pointer';
lisProductos.addEventListener("click", () => {
    window.location.href = './productos.html';
});

listaNavegacion.appendChild(lisProductos);


let lisFormulario = document.createElement('li');
lisFormulario.innerText = 'Formulario';
lisFormulario.style.display = 'inline';
lisFormulario.style.color = 'white';
lisFormulario.style.marginLeft = '20px';
lisFormulario.style.cursor = 'pointer';
lisFormulario.addEventListener("click", () => {
    window.location.href = './formulario.html';
});

listaNavegacion.appendChild(lisFormulario);

//10. subimos el ul a la barra de navegación
navegación.appendChild(listaNavegacion);


// 11. capturamos todos los elementos o html con la clase titulo
// es una coleccion de nodos(array) llamado HTMLCollection

let titulo = document.getElementsByClassName('titulo');

// 12. imprimimos consola  la coleccion de nodos
console.log(titulo);

// 13. modificamos los estilos para el primer elemento de la coleccion
/*titulo.innerText = 'Productos';*/
titulo[0].style.textAlign = 'center';
titulo[0].style.marginTop = '20px';


/*let body = document.getElementById('body');
body.appendChild(titulo);*/