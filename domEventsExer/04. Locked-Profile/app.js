function lockedProfile() {
    let buttons = document.querySelectorAll("button");
    for (button of buttons) {
        button.addEventListener("click", (e) => {
            let parent = e.target.parentElement
            let radioButtonUnlock = parent.querySelector('input[value="unlock"]');
            let showHideInfo = parent.querySelector("button").innerText;
            let currentButton = parent.querySelector("button");
            let infoToDisplay = parent.querySelector("div");
            if (radioButtonUnlock.checked) {
                currentButton.disabled = false;
                if (showHideInfo === "Show more") {
                    infoToDisplay.style.display = "block";
                    currentButton.innerText = "Hide it";
                } else if (showHideInfo === "Hide it") {
                    infoToDisplay.style.display = "none";
                    currentButton.innerText = "Show more";
                }
            }
        })
    }
}