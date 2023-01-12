let cupones = [
    {
      nombre: "10%",
      descuento: 10,
      estado: true,
    },
    {
      nombre: "20%",
      descuento: 20,
      estado: true
    },
    {
      nombre: "50%",
      descuento: 50,
      estado: true
    },
  ];


let productos = [
      {
          sku: "a1",
          nombre: "HORNO A GAS GALILEO 360",
          marca: "Castelnuovo",
          descripcion: "Horno de combustión a gas, con cuerpo completamente de acero inoxidable 430, superficie de piedra refractaria giratoria 360ª y termómetro de cámara integrado.",
          precio: 450000,
          imagen1: "./assets/img/horno_gas.jpg",
          imagen2: "./assets/img/horno2.jpg",
          imagen3: "./assets/img/horno3.jpg"
      },
      {
          sku: "a2",
          nombre: "PALA CIRCULAR PARA PIZZA 30 CM.",
          marca: "Sanelli Italy",
          descripcion: "Pala para Pizza ø30 cm Redonda con mango Aluminio 96 cm.",
          precio: 48000,
          imagen1: "./assets/img/pala_circular.jpg",
          imagen2: "./assets/img/pala2.jpg",
          imagen3: "./assets/img/pala3.jpg"
      },
      {
          sku: "a3",
          nombre: "AMASADORA PROFESIONAL APK-50",
          marca: "Pareti-Kitchenette",
          descripcion: "Con nuestras amasadoras industriales Pareti-Kitchenette® podrás facilitar el proceso de producción a gran escala, evitando la limpieza exhaustiva de trabajar en un mesón.",
          precio: 1350000,
          imagen1: "./assets/img/amasadora.png",
          imagen2: "./assets/img/amasadora2.png",
          imagen3: "./assets/img/amasadora3.png"
      },
      {
          sku: "a4",
          nombre: "BANDEJA PARA PIZZA ø30 ALUMINIO PERFORADA",
          marca: "Castelnuovo",
          descripcion: "Nuestras rejillas para pizza de 30 cm se encuentran fabricadas en aluminio, con ellas podrás hornear una masa mucho más crocante, debido a que la malla ayudará a transferir el calor a la masa.",
          precio: 25990,
          imagen1: "./assets/img/bandeja_pizza.jpg",
          imagen2: "./assets/img/bandeja2.jpg",
          imagen3: "./assets/img/bandeja3.jpg"
      },
]

let productosCarro = [];

let precioTotalCompra = 0;

if(localStorage.getItem("productos")){
  productosCarro = JSON.parse(localStorage.getItem("productos"))
  actualizarCarro(productosCarro)
}

function actualizarCarro(listadoProductos) {
  localStorage.setItem("productos", JSON.stringify(listadoProductos))
  const valorInicial = 0;
  const sumaProductos = listadoProductos.reduce(
      (accumulator, producto) => accumulator + producto.cantidad,
      valorInicial
  );
  document.querySelector("#cantidad-productos").innerText = sumaProductos;
}


function cargarTablaProductos(){

  let acumuladorFilas = "";

  productosCarro.forEach((producto, index)=> {
    
    let descuento = 0
    let productoConDetalles = encontrarProducto(producto.codigo);
    let precioUnitario = productoConDetalles.precio - descuento;
    let totalProducto = precioUnitario * producto.cantidad;
    precioTotalCompra += totalProducto;
    

    let template = `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>${productoConDetalles.sku}</td>
        <td>${productoConDetalles.nombre}</td>
        <td>${productoConDetalles.precio}</td>
        <td></td>
        <td>${precioUnitario}</td>
        <td>
          <button onclick="restar('${productoConDetalles.sku}')">-</button>
          <input type="number" value="${producto.cantidad}" min="0" max="10" id="cantidad-carro">
          <button onclick="sumar('${productoConDetalles.sku}')">+</button>
        </td>
        <td>${totalProducto}</td>
    </tr>
  `
acumuladorFilas+=template;
})

  document.querySelector("#productos-carrito tbody").innerHTML= acumuladorFilas;
  document.querySelector("#precio-total").innerHTML= `El precio total de la compra es: <strong>$ ${precioTotalCompra}</strong> `;
}


function encontrarProducto(sku){
  let encontrado = productos.find(producto => producto.sku == sku)
  return encontrado
}

cargarTablaProductos()

document.getElementById("btn-vaciar").addEventListener("click", function(event){
  event.preventDefault();
  localStorage.setItem("productos", "[]");
  location.reload();

})

  //LÓGICA DESCUENTO POR CUPÓN
  document
    .getElementById("btn-descuento")
    .addEventListener("click", function (event) {
      let cuponIngresado = document.getElementById("input-cupon").value;
  
      let cuponEncontrado = cupones.find(
        (cupon) => cupon.nombre == cuponIngresado
      );
  
  
      if (cuponEncontrado && cuponEncontrado.estado == true) {
        
        Swal.fire('Cupón aplicado')
        precioTotalCompra =
          precioTotalCompra -
          (precioTotalCompra * cuponEncontrado.descuento) / 100;
        document.querySelector(
          "#precio-total"
        ).innerHTML = `El precio total de la compra con descuento es: <strong>$${precioTotalCompra}</strong>`;
        cuponEncontrado.estado = false;
      } else {
       Swal.fire('El cupón no existe. / o está caducado')

      }
    });
  
  
    //SUMAR PRODUCTOS
  
    function restar(sku){
     
      productosCarro.forEach((producto, index) => { 
        if(sku == producto.codigo){
          producto.cantidad = producto.cantidad - 1;
          if(producto.cantidad <= 0){
            if(confirm("Está seguro que desea eliminar?")){
              productosCarro.splice(index, 1)
            }else{
              producto.cantidad =1;
            }
          }
        }
      })
      actualizarCarro(productosCarro);
      cargarTablaProductos();
    }
  
  
    //RESTAR PRODUCTOS
  
    function sumar(sku){
  
      productosCarro.forEach((producto, index) => {
        if(sku == producto.codigo){
          producto.cantidad = producto.cantidad + 1;
          if(producto.cantidad >= 10){
            producto.cantidad =10;
            alert("Alcanzo el limite de productos permitidos (10 unidades)")
          }
        }
      })
      actualizarCarro(productosCarro);
      cargarTablaProductos();
    } 

