// Seleccionamos el contenedor principal y lo creamos si no existe
const contenedor = document.createElement('div');
contenedor.id = 'contenedor';
document.body.appendChild(contenedor); // Añadimos el contenedor al body

//CREAMOS LOS DIVs *********************************************************************************************************************************

// Creamos el div superior
const divSuperior = document.createElement('div');
divSuperior.id = 'divSuperior';
divSuperior.innerText = 'Div Superior';
contenedor.appendChild(divSuperior); // Añadimos el div superior al contenedor

// Creamos el div lateral izquierdo
const divLateralIzquierdo = document.createElement('div');
divLateralIzquierdo.id = 'divLateralIzquierdo';
//divLateralIzquierdo.innerText = 'Div Lateral Izquierdo';
contenedor.appendChild(divLateralIzquierdo); // Añadimos el div lateral izquierdo al contenedor


// Creamos el div inferior derecho
const divInferiorDerecho = document.createElement('div');
divInferiorDerecho.id = 'divInferiorDerecho';
contenedor.appendChild(divInferiorDerecho); // Añadimos el div inferior derecho al contenedor

//**************************************************************************************************************************************************** */

// Crear el div paraHome
const paraHome = document.createElement('div');
paraHome.className = 'paraHome';
paraHome.innerText = 'Home'; // Cambia este texto a lo que desees

// Añadir el div paraHome al divInferiorDerecho
divInferiorDerecho.appendChild(paraHome);



// Creamos 4 divs dentro del div inferior derecho
for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    
    // Añadir una clase al div
    div.classList.add('six-buttons'); // Puedes cambiar 'mi-clase' al nombre deseado

    // Array con las rutas completas de las imágenes
    const images = ['./imagenes/11.svg','./imagenes/22.svg','./imagenes/33.svg','./imagenes/44.svg','./imagenes/55.svg','./imagenes/66.svg'];
    const img = document.createElement('img');
    img.src = images[i]; // Asignar la fuente de la imagen
    img.alt = `Men ${i + 1}`; // Texto alternativo para la imagen

    // Añadir la imagen al div
    div.appendChild(img);

    //div.innerText = `Div ${i + 1}`;
    divInferiorDerecho.appendChild(div); // Añadimos cada div al div inferior derecho
}







// Creamos 4 divs dentro del div lateral izquierdo y añadimos imagenes a los mismos

// Crear divs y agregar imágenes
for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    // Array con las rutas completas de las imágenes
    const images = ['./imagenes/1.png','./imagenes/2.png','./imagenes/3.png','./imagenes/4.png'];
    // Crear una imagen
    const img = document.createElement('img');
    img.src = images[i]; // Asignar la fuente de la imagen
    img.alt = `Men ${i + 1}`; // Texto alternativo para la imagen
    
    // Añadir la imagen al div
    div.appendChild(img);
    
    // Añadir texto al div
    //div.appendChild(document.createTextNode(` Men ${i + 1}`));
    
    // Añadir cada div al div lateral izquierdo
    divLateralIzquierdo.appendChild(div);
}


//Crear div para SEARCH
const contenedorSearch = document.createElement('div');
contenedorSearch.className = 'contenedorSearch';
//paraSearch.innerText = 'Search'; // Cambia este texto a lo que desees

// Añadir el div paraHome al divInferiorDerecho
divSuperior.appendChild(contenedorSearch);




 // Creando un input dentro de contenedorSearch
 const inputElement = document.createElement('input');

 // Asignar atributos al input
 inputElement.type = 'text'; // Specify the type
 inputElement.placeholder = 'Search'; // Set the placeholder

 // Añadiendo el input a contenedorSearch
  contenedorSearch.appendChild(inputElement);


//Añadiendo una caja para la lupa dentro de contenedorSearch
const cajaLupa = document.createElement('div');
const img = document.createElement('img');
img.src = "./imagenes/lupa.svg"
cajaLupa.id = 'lupa';
contenedorSearch.appendChild(cajaLupa);
cajaLupa.appendChild(img);




//Crear circulo
const circuloI = document.createElement('div');
const circuloD = document.createElement('div');
circuloI.className = 'circuloUsuarioI';// Asigna la clase para estilos
circuloD.className = 'circuloUsuarioD';// Asigna la clase para estilos
// Añadir el círculo a divSuperior
divSuperior.appendChild(circuloI); // Agrega el círculo al contenedor
divSuperior.appendChild(circuloD); // Agrega el círculo al contenedor



