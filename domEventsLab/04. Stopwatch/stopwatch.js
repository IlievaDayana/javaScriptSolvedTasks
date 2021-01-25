function stopwatch() {
    let timer = document.getElementById("time");

    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    startBtn.addEventListener("click", function() {
        timer.innerText = `00:00`;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        startTime = Date.now();
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            timer.innerText = timeToString(elapsedTime);
        }, 1000)

    })

    stopBtn.addEventListener("click", function() {
        if (startBtn.disabled) {
            startBtn.disabled = false;
            stopBtn.disabled = true;
            clearInterval(timerInterval);
        }
    })

    function timeToString(time) {
        let diffInHrs = time / 3600000;
        let hh = Math.floor(diffInHrs);

        let diffInMin = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMin);

        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);

        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");

        return `${formattedMM}:${formattedSS}`;
    }
}