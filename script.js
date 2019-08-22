let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
  
let interval = null;
let status = stopped;
// let a = document.querySelector("#hours").innerHTML;
// let b = document.querySelector("#minutes").innerHTML;
// let c = document.querySelector("#seconds").innerHTML;

function start() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toLocaleString();
    }else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toLocaleString();
    }else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toLocaleString();
    }else{
        displayHours = hours;
    }


         document.querySelector("#display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    
    window.setTimeout(start, 100);
}


function stop() {
    
}

function reset() {
    document.querySelector("#display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    window.clearInterval(reset, );
}