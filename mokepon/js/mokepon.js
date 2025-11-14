let vidasJugador = 3
let vidasEnemigo = 3
let ataqueJugador = ''
let ataqueEnemigo = ''

function iniciarJuego(){

    

    let sectionSeleccionarMensaje = document.getElementById('seleccionar-ataque')
    sectionSeleccionarMensaje.style.display = 'none'
    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'none'


    let botnMascotaJugador = document.getElementById('boton-mascota')
    botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua') 
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',btnReiniciar)

}
function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputCapipepo = document.getElementById('capipepo')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarMensaje = document.getElementById('seleccionar-ataque')
    sectionSeleccionarMensaje.style.display = 'flex'

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


function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    elegirtAtaqueEnemigo()
    //alert("Elegiste: " + ataqueJugador +" VS "+ ataqueEnemigo)
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    elegirtAtaqueEnemigo()
    //alert("Elegiste: "  + ataqueJugador+ " VS "+ ataqueEnemigo)
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    elegirtAtaqueEnemigo()
    //alert("Elegiste: " + ataqueJugador +  " VS " +  ataqueEnemigo)
}


function elegirtAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(1,3)
    
            if(ataqueEnemigoAleatorio==1){
                ataqueEnemigo = "FUEGO"
            }else if(ataqueEnemigoAleatorio == 2){
                ataqueEnemigo = "AGUA"
            }else if(ataqueEnemigoAleatorio == 3){
                ataqueEnemigo = "TIERRA"
            }else{
                ataqueEnemigo = "MAL ELEGIDO"
            }

            createMensaje()
    
}

function revisarVidas(){
     if (vidasEnemigo == 0){
        //alert("GANASTE")
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    }else if (vidasJugador == 0){
        //alert("PERDISTE")
        crearMensajeFinal('Lo siento, perdiste :(')
    }

}

function combateFinal (human, computer){
    let spanVidaEnemigo = document.getElementById('vidas-enemigo')
    let spanVidaJugador = document.getElementById('vidas-jugador')
    if (human == computer) {
        return "EMPATE"
    }else if ((human == "FUEGO" && computer == "TIERRA") || (human == "AGUA" && computer === "FUEGO") || (human === "TIERRA" && computer  === "AGUA")){
        vidasEnemigo--
        spanVidaEnemigo.innerHTML =  vidasEnemigo
        return "GANASTE 🎉"
    } else{
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
        return "PERDISTE 😢"
    } 

    

}


function createMensaje(){
    let sectioMensajes = document.getElementById("resultado")
    let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
    let ataqueDelJugador = document.getElementById("ataque-del-jugador")  

    //let notificacion = document.createElement('p')// ya no lo cremaos ahora existe
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    let resultado = combateFinal(ataqueJugador,ataqueEnemigo)

    //notificacion.innerHTML = resultado
    sectioMensajes.innerHTML = resultado//mandamos el mensaje de forma directa
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ///sectioMensajes.appendChild(notificacion)//ya no se requiere
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo )
    revisarVidas()
}

function crearMensajeFinal(ResultadoFinal){
    let sectioMensajes = document.getElementById("resultado")  
    
    
    sectioMensajes.innerHTML = ResultadoFinal

    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'block'
    
    //sectioMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled= true
    let botonAgua = document.getElementById('boton-agua') 
    botonAgua.disabled= true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled= true

}

function btnReiniciar(){
    //alert('Reiniciando Juego')

    location.reload()

}


function aleatorio (min,max){
            return Math.floor(Math.random() * (max - min + 1 )+min) 
        }



window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana