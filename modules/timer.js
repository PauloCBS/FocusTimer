import state from './state.js'
import * as el from './elements.js'

export function countdown() {
 clearTimeout(state.countdownID);

    if(!state.isRunning) {
        return
    }


    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (seconds === 0 && minutes === 0) {
        // O cronômetro chegou a zero, faça o que for necessário aqui
        return;
    }

    if (seconds === 0) {
        // Se os segundos chegarem a zero, diminua os minutos em 1
        minutes--;
        seconds = 59; // Defina os segundos para 59
    } else {
        seconds--;
    }

    updateDisplay(minutes, seconds); // Atualize a exibição do tempo

    state.countdownID = setTimeout(() => countdown(), 1000);
}


export function updateDisplay(minutes,seconds){

    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");

}

