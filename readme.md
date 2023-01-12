# PROYECTO PORTAFOLIO MÓDULO 3

## CUENTA DE GITHUB

https://github.com/fstubing

## LINK GITHUB PAGES

[Deploy Github Pages](https://fstubing.github.io/portafolio-m-3/)

## INTRODUCCIÓN

Proyecto consiste en la continuación de la construcción de un sitio web de e-commerce básico. Respecto al proyecto del módulo dos -a grandes rasgos- se agregaró un carrito funcional y página de login de usuarios

## HERRAMIENTAS UTILIZADAS

### 1. USO DE COMANDOS EN TERMINAL
- cd, touch, mkdir y ls

### 2. USO COMANDOS GIT
- git init, add, commit, branch, status, log, push

### 3. USO DE BOOTSTRAP
- se utilizan componentes carrusel, navbar y tarjetas

### 4. USO DE HTML
- Extructura de página web se realiza en base a HTML.

### 5. USO DE CSS
- Estilos del sitio utiliza en parte importante estilos base de bootstrap, pero de todas formas se modifican algunos de ellos y se le entrega estilo en aquellos elementos que no son de bootstrap.

### 6. USO DE JAVASCRIPT
Las principales modificaciones realizadas en comparación al proyecto anterior están dadas en el uso de javascrip. Son especialmente relevantes los siguientes aspectos:

#### a.- script.js
- Se inicializa variable global "productosCarro" que contiene cada producto agregado al carro, representado por un un objeto (objProducto).
- Se establece condición que pregunta si en el local storage hay productos y en caso positivo indica que productosCarro será igual a los productos existentes en el local storage. Se ocupa Json.parse para covertir el código en js.
- Se establece función que permite agregar productos al carro. Cuando damos click en el carro se acciona la función que agrega los productos al local storage en forma de objetos. Primero, se inicializa el objeto objProducto. Segundo, se crea la variable productoEncontrado que está relacionada con la condición que se plantea a continuación. Tercero, se establece condición de que en caso que exista productoEncontrado (o sea, en el local storage), en ese caso el agregar producto al carro se representa aumentando la cantidad del objeto producto; en caso de que no exista en el carro en producto agregado, se realiza un push para incluirlo al final del array. Cuarto, se invoca función "actualizarCarro".
- Se establece función que actualiza el contador del carro. Primero busca en el local storage los elementos existentes. Segundo, con reduce se realiza una suma de las cantidades que existe de cada producto en el local storage. Tercero, envío la información al elemento del documento html que contiene el contador.

#### b.- carrito.js
- Se declara array que sirve de diccionario de cupones de descuento.
- Se agregan array con productos que sirve como diccionario para otras funciones y variables.
- Se declaran dos variables globales que se utilizan por otras variables o funciones posteriores (productosCarro y precioTotalCompra).
- Se reiteran funciones y condiones necesarias para actualización de carrito que se incluyeron el script.js.
- Se establece función que inyecta html con los productos en concordancia con lo existente en el local storage. Se recorre el "productosCarro" con .forEach y se extraen datos para rellenar template. Los templates creados por cada producto existentes en "productosCarro" se acumulan en una variable, la que se inyecta en carrito.html mediante diverso métodos y propiedades como "document.querySelector" e ".innerHTML".
- Luego se establece función "encontrarProducto" que trabaja junto con la función anterior. Le provee los datos necesarios para rellenar información del template.
- se incluye lógica para vaciar carrito. Para ello se agrega un evento click al boton de vaciar carrito. El click desencadena el resto de la lógica que implica vaciar el local storage y recargar página.
- Lógica de descuento por cupón. Se ocupa objeto "document" y propiedades para vincular botón de agregar cupón con la lógica que se gatilla a partir de darle click. Se declaran variables con datos necesarios para su funcionamiento. Se establece condición para que se revise si el cupón existe dentro del array y si está vigente. En caso de cumplir las condiciones, se realiza rebaja del valor a pagar y genera una ventana de alerta indicando que el cupón de ingresó correctamente. Si no se cumple una de las condiciones solo se genera ventana indicando que no se aplicó cupón.
- Función restar productos al carrito. Se utiliza el dato del sku para iterar dentro de elementos de "productosCarro" a través de .forEach y estableciendo una condición que revisa si el sku es igual al código del producto del array. En caso efectivo, resta el producto. Luego se establece una condición anidada que pregunta si la cantidad es igual o menor a cero y en caso efectivo se anida otro if para preguntar si está seguro de eliminar. Si se acepta, se elimina producto a través de .splice), de lo contrario el contador queda en 1
- Función sumar productos al carrito. Similar al anterior, pero agregando lógica relativa a si se llega al tope máximo de productos.

#### c.- productoScript.js
- Se declaran variables globales "productos" y "productosCarro".
- Se establece condición que pregunta si en el local storage hay productos y en caso positivo indica que productosCarro será igual a los productos existentes en el local storage. Se ocupa Json.parse para covertir el código en js.
- Se establece función que permite agregar productos al carro. Cuando damos click en agregar al carro se acciona la función que agrega los productos al local storage en forma de objetos. Primero, se inicializa el objeto objProducto. Segundo, se crea la variable productoEncontrado que está relacionada con la condición que se plantea a continuación. Tercero, se establece condición de que en caso que exista productoEncontrado (o sea, en el local storage), en ese caso el agregar producto al carro se representa aumentando la cantidad del objeto producto; en caso de que no exista en el carro en producto agregado, se realiza un push para incluirlo al final del array. Cuarto, se invoca función "actualizarCarro".
- Se establece función que actualiza el contador del carro. Primero busca en el local storage los elementos existentes. Segundo, con .reduce se realiza una suma total de las cantidades que existe de cada producto en el local storage. Tercero, envío la información al elemento del documento html que contiene el contador para que se refleje en la página.
- Se declara variable parametro que tiene en su interior un objeto que nos permite acceder a los parámetros de la URL. En específico, acá recolectamos el dato de la sku (el dato de la sku va dentro de la URL ya que fue incluido en los links que redirigieron a la página productoN.html). Luego se establece variable found que tiene como dato el que se obtenga de la búsqueda que se realice mediante .find dentro de los productos a través del sku. Finalmente, se establece la condición que si found existe, en ese caso se inyecta el template del producto en correlación a su sku.

#### d.- login.js
- Se declara array con usuarios que sirve como diccionario para lógica posterior.
- Se ocupa objeto "document" y propiedades para vincular tabla con correspondiente ID con la función que se gatilla a partir de realizar el "submit". 
- Se declaran variables de nombre y password las que se les entregan el valor correspondiente elemento de la tabla.
- se declara variable encontrado que tiene como valor el resultante de la búsqueda de los valores ingresados en nombre y password en el array de usuarios.
- Finalmente se establece condición. Si existe "encontrado" se envía mensaje informando de ello y redirije a página del home. Si no existe "encontrado" solo se envía mensaje de error.