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

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let mascotaEnemigo = ""
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')


    
            if(ataqueAleatorio==1){
                mascotaEnemigo = "Hipodogue"
            }else if(ataqueAleatorio == 2){
                mascotaEnemigo = "Capipepo"
            }else if(ataqueAleatorio == 3){
                mascotaEnemigo = "Ratihueya"
            }else{
                mascotaEnemigo = "MAL ELEGIDO"
            }
    spanMascotaEnemigo.innerHTML = mascotaEnemigo
            
}

function aleatorio (min,max){
            return Math.floor(Math.random() * (max - min + 1 )+min) 
        }

window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana