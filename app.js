//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1 ;
let numeroUsuario = 0;
let contador = 1;
//let palabraVeces = 'intento';
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Ingresa un número del 1 - 10 por favor"));
    console.log(numeroUsuario);
    // Verificamos si se cumple la condición
    if (numeroUsuario == numeroSecreto){
        //Usuario acerto número secreto
        alert('¡Correcto! El número secreto es: ' + `${numeroUsuario}` + ' lo lograste en: ' + `${contador}` + ' ' + 
        `${contador == 1 ? 'intento' : 'intentos'}`);
    } else {
        //Usuario no acerto número secreto
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor al numero: ' + `${numeroUsuario}`);
        }else {
            alert('El número secreto es mayor al numero: ' + `${numeroUsuario}`);
        }
        //Incrementamos contador cuando no acierta
        contador++;
        //palabraVeces = 'intentos';
        if(contador > maximosIntentos){
            alert('Lo siento! llegaste al ' + `${maximosIntentos}` + ' intentos');
            break;
        }
    
    } 
}

