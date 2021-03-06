function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener("change", validateInput)
    let textMatch = /^[a-z]+@[a-z]+(?:\.[a-z]+)*$/
        // Write a function that dynamically validates an email input field when it is changed. 
        // If the input is invalid, apply the style "error". Do not validate on every keystroke, as it is annoying for the user, 
        //consider only change events.
        // A valid email is considered to be in the format: <name>@<domain>.<extension>
        // Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.
        // Submit only the validate() function in judge.

    function validateInput(a) {
        let mail = emailInput.value

        if (!mail.match(textMatch)) {
            emailInput.className = "error"
        } else {
            emailInput.className = ""
        }
    }
}