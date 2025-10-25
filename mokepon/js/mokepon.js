function iniciarJuego(){



let botnMascotaJugador = document.getElementById('boton-mascota')
botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

}
function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputCapipepo = document.getElementById('capipepo')

    if(inputHipodoge.checked){
       alert("Seleccionaste a Hipodoge") 
    }else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya")
    }else if(inputCapipepo.checked){
        alert("Seleccionaste a Capipepo")
    }else{
        alert("Debes seleccionar una mascota")
    }
}


window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana