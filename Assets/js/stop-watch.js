let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById('timeDisplay');

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);

    return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs)
    );
}

function startBtn() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(function () {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;
            timeDisplay.textContent = timeToString(difference);
        }, 1000);
        running = true;
    }
}

function stopBtn() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetBtn() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    timeDisplay.textContent = "00:00:00";
}
