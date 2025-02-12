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

// Creamos el div superior izquierdo que contiene el circulo izquierdo
const divCirculo = document.createElement('div');
divCirculo.id = 'divCirculo';
contenedor.appendChild(divCirculo); // Añadimos el div superior al contenedor






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





// Creamos 4 divs dentro del div lateral izquierdo y añadimos imagenes a los mismos

// Crear divs y agregar imágenes
for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    // Array con las rutas completas de las imágenes
    const images = ['/static/imagenes/1.png','/static/imagenes/2.png','/static/imagenes/3.png','/static/imagenes/4.png'];
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




//Crear div contenedor para SEARCH
const contenedorSearch = document.createElement('div');
contenedorSearch.className = 'contenedorSearch';
contenedorSearch.innerHTML = 'Settings Products'; // Cambia este texto a lo que desees
// Añadir el div paraHome al divInferiorDerecho
contenedor.appendChild(contenedorSearch);



//Crear circulo
const circuloI = document.createElement('div');
const circuloD = document.createElement('div');
circuloI.className = 'circuloUsuarioI';// Asigna la clase para estilos
circuloD.className = 'circuloUsuarioD';// Asigna la clase para estilos
// Añadir el círculo a divSuperior
divSuperior.appendChild(circuloI); // Agrega el círculo al contenedor
divSuperior.appendChild(circuloD); // Agrega el círculo al contenedor



//Crear div product dentro de divInferiorDerecho
const product = document.createElement('div');
product.className = 'product';

// Añadir el div paraHome al divInferiorDerecho
contenedor.appendChild(product);

// Crear el título del formulario
const title = document.createElement('h2');
title.textContent = 'Products';
title.className = 'titulo'; // Asignar una clase para estilos
contenedor.appendChild(title);

// Crear el campo de Nombre
// 1. Crear un elemento <div> para agrupar el campo de nombre y su etiqueta.
const nameGroup = document.createElement('div');

// 2. Asignar la clase 'form-group' al <div> creado. Esta clase se usa para aplicar estilos CSS.
nameGroup.className = 'form-group-nombre';

// 3. Crear un elemento <label> para la etiqueta del campo de nombre.
const nameLabel = document.createElement('label');

// 4. Establecer el texto de la etiqueta como "Nombre:".
nameLabel.textContent = 'Nombre:';

// 5. Asignar el atributo "for" al <label>. El valor "name" indica que esta etiqueta está asociada al campo de entrada con el id "name".
nameLabel.setAttribute('for', 'name');

// 6. Crear un elemento <input> para el campo de entrada de texto del nombre.
const nameInput = document.createElement('input');

// 7. Establecer el nombre de entrada como "text" (campo de texto).
nameInput.type = 'text';

// 8. Asignar el id "name" al campo de entrada. Esto permite que el <label> se asocie con este campo.
nameInput.id = 'name';

// 9. Asignar el atributo "name" al campo de entrada. Este atributo se usa para identificar el campo cuando se envía el formulario.
nameInput.name = 'name';

// 10. Hacer que el campo de entrada sea obligatorio (required). El formulario no se enviará si este campo está vacío.
nameInput.required = true;

// 11. Agregar la etiqueta (<label>) como hijo del <div> "nameGroup".
contenedor.appendChild(nameLabel);

// 12. Agregar el campo de entrada (<input>) como hijo del <div> "nameGroup".
contenedor.appendChild(nameInput);

// 13. Agregar el <div> "nameGroup" (que ahora contiene la etiqueta y el campo de entrada) como hijo del formulario.
contenedor.appendChild(nameGroup);


    // Crear el campo Código
    const codigoGroup = document.createElement('div');
    codigoGroup.className = 'form-group-codigo';
    const codigoLabel = document.createElement('label');
    codigoLabel.textContent = 'Código:';
    codigoLabel.setAttribute('for', 'codigo');
    const codigoInput = document.createElement('input');
    codigoInput.type = 'codigo';
    codigoInput.id = 'codigo';
    codigoInput.name = 'codigo';
    codigoInput.required = true;
    contenedor.appendChild(codigoLabel);
    contenedor.appendChild(codigoInput);
    contenedor.appendChild(codigoGroup);




    // Crear el campo Stock
    const stockGroup = document.createElement('div');
    stockGroup.className = 'form-group-stock';
    const stockLabel = document.createElement('label');
    stockLabel.textContent = 'Stock:';
    stockLabel.setAttribute('for', 'stock');
    const stockInput = document.createElement('input');
    stockInput.type = 'stock';
    stockInput.id = 'stock';
    stockInput.name = 'stock';
    stockInput.required = true;
    contenedor.appendChild(stockLabel);
    contenedor.appendChild(stockInput);
    contenedor.appendChild(stockGroup);

    
    // Crear el campo Tipo
    const tipoGroup = document.createElement('div');
    tipoGroup.className = 'form-group-tipo';
    const tipoLabel = document.createElement('label');
    tipoLabel.textContent = 'Tipo:';
    tipoLabel.setAttribute('for', 'tipo');
    const tipoInput = document.createElement('input');
    tipoInput.type = 'tipo';
    tipoInput.id = 'tipo';
    tipoInput.name = 'tipo';
    tipoInput.required = true;
    contenedor.appendChild(tipoLabel);
    contenedor.appendChild(tipoInput);
    contenedor.appendChild(tipoGroup);
    
    
    // Crear el campo Peso
    const pesoGroup = document.createElement('div');
    pesoGroup.className = 'form-group-peso';
    const pesoLabel = document.createElement('label');
    pesoLabel.textContent = 'Peso:';
    pesoLabel.setAttribute('for', 'peso');
    const pesoInput = document.createElement('input');
    pesoInput.type = 'peso';
    pesoInput.id = 'peso';
    pesoInput.name = 'peso';
    pesoInput.required = true;
    contenedor.appendChild(pesoLabel);
    contenedor.appendChild(pesoInput);
    contenedor.appendChild(pesoGroup);

    
    // Crear el campo Precio
    const precioGroup = document.createElement('div');
    precioGroup.className = 'form-group-precio';
    const precioLabel = document.createElement('label');
    precioLabel.textContent = 'Precio:';
    precioLabel.setAttribute('for', 'precio');
    const precioInput = document.createElement('input');
    precioInput.type = 'precio';
    precioInput.id = 'precio';
    precioInput.name = 'precio';
    precioInput.required = true;
    contenedor.appendChild(precioLabel);
    contenedor.appendChild(precioInput);
    contenedor.appendChild(precioGroup);
    
    
    
    
    




//Añadiendo una caja para la imagen product_1 de product
const cajaImgProduct = document.createElement('div');
const img0 = document.createElement('img');
img0.src = "/static/imagenes_product/product_1.svg"
cajaImgProduct.id = 'product_1';
contenedor.appendChild(cajaImgProduct);
cajaImgProduct.appendChild(img0);


// Crear el contenedor de los botones
const contBotonera = document.createElement('div');
contBotonera.id = 'botonera'; // Asigna la clase para estilos
//Agrego el contenedor de la botonera al contenedor
contenedor.appendChild(contBotonera);
const botonera = document.getElementById('botonera');



// Crear Botón 1
const boton1 = document.createElement('button');
boton1.className = 'boton1';
boton1.id='boton1';

// Crear Botón 2
const boton2 = document.createElement('button');
boton2.className = 'boton2';
boton2.id='boton2';

//Texto dentro de boton 1
const textoboton1 = document.createElement('div');
textoboton1.id='textoboton1';
textoboton1.innerText = 'Change picture';
boton1.appendChild(textoboton1);

//Texto dentro de boton 2
const textoboton2 = document.createElement('div');
textoboton2.id='textoboton2';
textoboton2.innerText = 'Delete picture';
boton2.appendChild(textoboton2);




// Agregar botones a la botonera
botonera.appendChild(boton1);
botonera.appendChild(boton2);









// Crear div contenedor para 3 engranajes
const tresEngranajes = document.createElement('div');
tresEngranajes.className = 'tresEngranajes';
contenedor.appendChild(tresEngranajes);

// Crear y añadir una imagen
const img1 = document.createElement('img');
img1.src = "/static/imagenes_product/product_2.svg"; // Verifica que esta ruta sea correcta
img1.alt = 'Engranaje'; // Texto alternativo
img1.className = 'engranaje'; // Asignar clase para estilos
tresEngranajes.appendChild(img1);

//Crear boton Send
const botonSend = document.createElement('button');
botonSend.className = 'botonSend';
botonSend.type='button';
botonSend.textContent="Send";
contenedor.appendChild(botonSend);

