function iniciarJuego(){



let botnMascotaJugador = document.getElementById('boton-mascota')
botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

}
function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputCapipepo = document.getElementById('capipepo')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
       spanMascotaJugador.innerHTML = 'Hipodogue' 
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else{
        alert("Debes seleccionar una mascota")
    }
}


window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana