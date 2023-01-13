let usuarios = [
    {
        nombre: "Pedro",
        password: "123456",
        correo: "pedro@gmail.com"
    },
    {
        nombre: "Carlos",
        password: "123456",
        correo: "carlos@gmail.com"
    },

]


document.getElementById("form-login").addEventListener("submit", function(event){
    event.preventDefault();
    let nombre = document.getElementById("login-nombre").value;
    let password = document.getElementById("login-password").value;

    let encontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

    if(encontrado){
        Swal.fire('Usuario autenticado')
        document.getElementById('saludo').innerHTML = `Hola <b>${nombre}</b>. Has ingresado correctamente`
        document.getElementById('log-out').innerHTML = `<button type="submit" class="btn btn-danger" onclick='change()'>Cerrar cesión</button>`
    }else{
        Swal.fire('Datos incorrectos');
    }

})

function change(){
    document.getElementById('saludo').innerHTML = `<b>Login de usuario</b>`
    document.getElementById('log-out').innerHTML = `<form id="form-login">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" name="nombre" id="login-nombre" class="form-control my-1">
    <label for="password" class="form-label">password</label>
    <input type="password" name="password" id="login-password" class="form-control my-1" >
    <button type="submit" class="btn btn-primary">Ingresar</button>
    <button type="reset" class="btn btn-warning">Limpiar</button>
    </form>`
    Swal.fire('Cerraste cesión correctamente');
  }