function attachEventsListeners() {
    let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")


    let buttons = document.querySelectorAll("input[type=button]");
    for (button of buttons) {
        button.addEventListener("click", calc)
    }

    function calc(a) {
        let input = a.target.id;
        if (input === "daysBtn") {
            hours.value = Number(days.value) * 24
            minutes.value = hours.value * 60
            seconds.value = minutes.value * 60
        } else if (input === "hoursBtn") {
            days.value = Number(hours.value) / 24;
            minutes.value = Number(hours.value) * 60
            seconds.value = minutes.value * 60
        } else if (input === "minutesBtn") {
            seconds.value = Number(minutes.value) * 60;
            hours.value = Number(minutes.value) / 60;
            days.value = hours.value / 24;
        } else if (input === "secondsBtn") {
            minutes.value = Number(seconds.value) / 60;
            hours.value = minutes.value / 60;
            days.value = hours.value / 24;
        }
    }

}