let estadoConfig = 0;

function logout(){
    alert("Sesion cerrada");
        location.href="/index.html"
}

function unoMasConfig(){
    estadoConfig = 1;
    configAdmin();
}

function unoMenosConfig(){
    estadoConfig = 0;
    configAdmin();
}


function configAdmin(){
    if(estadoConfig == 1){
        document.getElementById('datos-config-admin').style.display="block";
    }else{
        document.getElementById('datos-config-admin').style.display="none";
    }
}