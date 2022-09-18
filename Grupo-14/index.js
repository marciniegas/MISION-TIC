function login(){
    let usuario = document.getElementById('txtUsuario').value;
    let contraseña = document.getElementById('txtContraseña').value;

    if(usuario == "admin" && contraseña == "admin"){
        alert("Bienvenido admin");
        location.href="/super-admin/start-admin.html"
    }else{
        alert("Error");
    }
}

document.getElementById('txtContraseña').addEventListener('keydown', inputCharacters);
function inputCharacters(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('buttonLogin').focus();
  }

}