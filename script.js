let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let timer;
let status = false;
// let a = document.querySelector("#hours").innerHTML;
// let b = document.querySelector("#minutes").innerHTML;
// let c = document.querySelector("#seconds").innerHTML;
function updateTime(){
    
    seconds++;

    if (seconds === 59) {
        seconds = 0;
        minutes++;

        if (minutes === 59) {
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
    
}


function start() {
    if(status === false){
    timer = setInterval(updateTime, 1000);
    status = true;
    }
}


function stop(){
    clearInterval(timer);
    status = false;
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector("#display").innerHTML = "00:00:00";
    clearInterval(start);

}