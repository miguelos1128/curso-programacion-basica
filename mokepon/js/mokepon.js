function iniciarJuego(){

let ataqueJugador = ''
let ataqueEnemigo = ''

let botnMascotaJugador = document.getElementById('boton-mascota')
botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)


let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click',ataqueFuego)
let botonAgua = document.getElementById('boton-agua') 
botonAgua.addEventListener('click',ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click',ataqueTierra)

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

function createMensaje(){
    let sectioMensajes = document.getElementById("mensajes")
    let resultado = combateFinal(ataqueJugador,ataqueEnemigo)
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado;

    sectioMensajes.appendChild(parrafo)
}

function combateFinal (human, computer){
      
            if (human == computer) {
                return "EMPATE"
            }else if ((human == "FUEGO" && computer == "TIERRA") || (human == "AGUA" && computer === "FUEGO") || (human === "TIERRA" && computer  === "AGUA")){
                return "GANASTE 🎉"
                //triunfos = triunfos + 1
            } else{
                return "PERDISTE 😢"
                //perdidas = perdidas + 1
            } 
}
function aleatorio (min,max){
            return Math.floor(Math.random() * (max - min + 1 )+min) 
        }



window.addEventListener('load', iniciarJuego)//escucha cuando termina de cargar la ventana