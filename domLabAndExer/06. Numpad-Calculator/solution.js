function solve() {
    // When one of the buttons is clicked, its value should be shown in the "Expression" field (#expressionOutput).
    // For instance, if we click on the button with value 9, the expected result should be:

    // If the current Expression field (#expresisonOutput) contains the whole math expression 
    //(left operand, operator and right operand: Example: 9 + 2), the expected result should be:  

    // When the equal sign "=" is pressed, the result of that expression should appear in the Result field (#resultOutput)

    // Otherwise, if we create an invalid expression such as "99 +" (without second/right operand) 
    //and we hit the equal sign "=", the expected result should be:


    // The "Clear" button should clear both Expression and Result fields (#expressionOutput and #resultOutput)
    // For instance, if we have the following expression:

    // And we press "Clear", the expected result should be:
    let allButtons = document.getElementsByTagName("button");

    let expressionField = document.querySelector("#expressionOutput");

    let resultField = document.querySelector("#resultOutput")

    let expressionEvaluation = ""

    function operand(x) {
        return x !== "=" && x !== "+" && x !== "-" && x !== "*" && x !== "/"
    }

    function checkIfAritOper(x) {
        return x === "+" || x === "-" || x === "*" || x === "/"
    }

    for (const element of allButtons) {
        element.addEventListener("click", function() {
            let x = element.value;
            if (x === "Clear") {
                resultField.innerText = ""
                expressionEvaluation = ""
                expressionField.innerText = ""
            } else {
                if (expressionField.innerText === "" && operand(x)) {
                    expressionEvaluation += x;
                    expressionField.innerText = expressionEvaluation;
                } else if (expressionEvaluation !== "" && operand(x)) {
                    expressionEvaluation += x;
                    expressionField.innerText = expressionEvaluation;
                } else if (checkIfAritOper(x)) {
                    expressionEvaluation += " " + x + " "
                    expressionField.innerText = expressionEvaluation;
                } else if (x === "=") {
                    if (expressionEvaluation.split(" ")[2] === "") {
                        resultField.innerText = NaN;
                    } else {
                        resultField.innerText = eval(expressionEvaluation)
                    }
                }
            }
        })
    }

}