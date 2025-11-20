    
const sectionSeleccionarMensaje = document.getElementById('seleccionar-ataque')
const sectionBotonReiniciar = document.getElementById('reiniciar')
const botnMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua') 
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const inputHipodoge = document.getElementById('hipodoge')
const inputRatigueya = document.getElementById('ratigueya')
const inputCapipepo = document.getElementById('capipepo')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaEnemigo = document.getElementById('vidas-enemigo')
const spanVidaJugador = document.getElementById('vidas-jugador')

const sectioMensajes = document.getElementById("resultado")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const ataqueDelJugador = document.getElementById("ataque-del-jugador") 

let mokepones = []
let vidasJugador = 3
let vidasEnemigo = 3
let ataqueJugador = ''
let ataqueEnemigo = ''

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
    
}

let hipodoge = new Mokepon('Hipodoge', './assets/Hipodogue.png', 5)

let capipepo = new Mokepon('Capipepo', '../assets/capipepo.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/ratiguella.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'}
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'}

)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'}

)
//mokepones.push(hipodoge, capipepo, ratigueya)
console.log(hipodoge)

function iniciarJuego(){

    sectionSeleccionarMensaje.style.display = 'none'
    sectionBotonReiniciar.style.display = 'none'
    botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click',btnReiniciar)

}
function seleccionarMascotaJugador(){

    

    
    sectionSeleccionarMascota.style.display = 'none'

    
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

    sectioMensajes.innerHTML = ResultadoFinal
    sectionBotonReiniciar.style.display = 'block'
    //sectioMensajes.appendChild(parrafo)
    botonFuego.disabled= true
    botonAgua.disabled= true
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