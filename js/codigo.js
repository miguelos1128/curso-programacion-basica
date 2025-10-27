
        function aleatorio (min,max){
            return Math.floor(Math.random() * (max - min + 1 )+min) 
        }

        function eleccion(jugada){
            let resultado = ""
            if(jugada==1){
                resultado = "Piedra 🪨"
            }else if(jugada == 2){
                resultado = "Papel 🧻"
            }else if(jugada == 3){
                resultado = "Tijera ✂️"
            }else{
                resultado = "MAL ELEGIDO"
            }
            return resultado
        }

        function combate (computer, human){
            
            if (human == computer) {
                alert("EMPATE")
            }else if ((human == 1 && computer == 3) || (human == 2 && computer === 1) || (human === 3 && computer  === 2)){
                alert("GANASTE 🎉")
                triunfos = triunfos + 1
            } else{
                alert("PERDISTE 😢")
                perdidas = perdidas + 1
            } 

        }
        //1 piedra, 2 Papel, Tijera
        let jugador = 0
        let pc = 0
        let triunfos = 0
        let perdidas = 0

        while (triunfos < 3 && perdidas < 3){
            pc = aleatorio(1,3)
            jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para tijera")
        
            
            alert("Tú eliges: " + eleccion(jugador))
            alert("PC elige: " + eleccion(pc))

            combate(pc,jugador)
            
        }
        alert("Ganaste " + triunfos + " Veces. Perdiste "+ perdidas + " Veces")
       