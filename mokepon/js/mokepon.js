function iniciarJuego(){

let botnMascotaJugador = document.getElementById('boton-mascota')
botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

}
function seleccionarMascotaJugador(){

    if(document.getElementById('hipodege').checked){
       alert("Seleccionaste Hipodoge") 
    }else if(document.getElementById('ratigueya').checked){
        alert("Seleccionaste: Ratigueya")
    }else if(document.getElementById('capipepo').checked){
        alert("Seleccionaste Capipepo")
    }
}


window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana