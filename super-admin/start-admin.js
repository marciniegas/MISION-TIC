let estadoConfig = 0;

function logout(){
    alert("Sesion cerrada");
        location.href="/index.html"
}

function mostrarTodo(){
    estadoConfig = 1;
    estadoConfig2 = 0
    configAdmin();
}

function mostrarTabla(){
    estadoConfig = 0;
    estadoConfig2 = 1;
    configAdmin();
}

function mostrarSoloTabla(){
    estadoConfig = 0;
    estadoConfig2 = 0;
    configAdmin();
}

function buscarEstudiante(){
    estadoConfig = 1;
    estadoConfig2 = 1;
    configAdmin();
}

function configAdmin(){
    if(estadoConfig == 1 && estadoConfig2 ==0){
        document.getElementById('datos-config-admin').style.display="block";
        document.getElementById('buscar-estudiante-ocultar').style.display="block";
        document.getElementById('info-etiqueta').style.display="none";
    }
    else if(estadoConfig == 0 && estadoConfig2 == 0){
        document.getElementById('datos-config-admin').style.display="block";
        document.getElementById('buscar-estudiante-ocultar').style.display="none";
        document.getElementById('info-etiqueta').style.display="none";
    }
    else if(estadoConfig == 1 && estadoConfig2 == 1){
        document.getElementById('datos-config-admin').style.display="none";
        document.getElementById('buscar-estudiante-ocultar').style.display="block";
        document.getElementById('info-etiqueta').style.display="none";
    }

    else if(estadoConfig == 0 && estadoConfig2 == 1){
        document.getElementById('datos-config-admin').style.display="none";
        document.getElementById('buscar-estudiante-ocultar').style.display="none";
        document.getElementById('info-etiqueta').style.display="block";
    }
}
