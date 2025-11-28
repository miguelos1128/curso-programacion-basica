    
const sectionSeleccionarMensaje = document.getElementById('seleccionar-ataque')
const sectionBotonReiniciar = document.getElementById('reiniciar')
const botnMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')


const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaEnemigo = document.getElementById('vidas-enemigo')
const spanVidaJugador = document.getElementById('vidas-jugador')

const sectioMensajes = document.getElementById("resultado")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const ataqueDelJugador = document.getElementById("ataque-del-jugador") 
const contenedorTajetas = document.getElementById("contenedor-tajetas")

const conetenedorAtaques = document.getElementById("conetenedor-ataques")

let mokepones = []
let vidasJugador = 3
let vidasEnemigo = 3
let ataqueJugador = ''
let ataqueEnemigo = ''
let opcionDeMokepones
let mascotaJugador
let ataquesMokepon
let inputHipodoge 
let inputRatigueya 
let inputCapipepo 
let botonFuego
let botonAgua
let botonTierra

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
    
}

let hipodoge = new Mokepon('Hipodoge', './assets/Hipodogue.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 5)

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
mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego(){

    sectionSeleccionarMensaje.style.display = 'none'
    sectionBotonReiniciar.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${Mokepon.nombre}"/>
            <label class="tarjeta-de-mokepon" for= "${Mokepon.nombre}">
                <p>${Mokepon.nombre}</p>
                <img src="${Mokepon.foto}" alt="${Mokepon.nombre}">
            </label>
        `
        contenedorTajetas.innerHTML += opcionDeMokepones

        inputRatigueya = document.getElementById('Ratigueya')
        inputCapipepo = document.getElementById('Capipepo')
        inputHipodoge = document.getElementById('Hipodoge')
    })
    botnMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click',btnReiniciar)

}
function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarMensaje.style.display = 'flex'

    if(inputHipodoge.checked){
       spanMascotaJugador.innerHTML = inputHipodoge.id 
       mascotaJugador = inputHipodoge.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        alert("Debes seleccionar una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    console.log(ataques)
    mostrarAtaques(ataques)
}

function mostrarAtaques (ataques){
    console.log(ataques)
    console.log(ataques[1])
    ataques.forEach((ataque) => {
        console.log(ataque)
        ataquesMokepon = `
        
        <BUTTon id="${ataque.id}" class="boton-ataque">${ataque.nombre}</BUTTon>
        `
        conetenedorAtaques .innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua') 
    botonTierra = document.getElementById('boton-tierra')

    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(0,mokepones.length -1 )
    
    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
            
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