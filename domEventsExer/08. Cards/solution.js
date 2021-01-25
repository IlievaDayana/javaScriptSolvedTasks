function solve() {
    let cardsField = document.querySelector(".cards");
    cardsField.addEventListener("click", addCard);
    let spanElements = document.querySelectorAll("span");
    let playerOneChoise = spanElements[0];
    let playerTwoChoise = spanElements[2];
    let historyElement = document.querySelector("#history")
    let results = []
    let currentTwoCards = {}

    function addCard(a) {
        let player = a.target.parentElement.id;
        let valueOfCard = a.target;

        if (player === "player1Div") {
            playerCardDisplay(playerOneChoise, valueOfCard, player)
        }
        if (player === "player2Div") {
            playerCardDisplay(playerTwoChoise, valueOfCard, player)
        }
    }

    function playerCardDisplay(playerChoise, valueCard, pl) {
        if (playerChoise.textContent === "") {
            playerChoise.appendChild(document.createTextNode(valueCard.name));
            currentTwoCards[pl] = valueCard;
        }
        if (playerOneChoise.textContent && playerTwoChoise.textContent) {
            if (Number(playerOneChoise.textContent) > Number(playerTwoChoise.textContent)) {
                currentTwoCards["player1Div"].src = "images/whiteCard.jpg";
                currentTwoCards["player2Div"].src = "images/whiteCard.jpg";
                currentTwoCards["player1Div"].style.border = "2px solid green",
                    currentTwoCards["player2Div"].style.border = "2px solid red";

                historyElement.textContent += `[${playerOneChoise.textContent+" vs "+ playerTwoChoise.textContent}] `
                playerOneChoise.textContent = ""
                playerTwoChoise.textContent = ""
            } else if (Number(playerOneChoise.textContent) < Number(playerTwoChoise.textContent)) {
                currentTwoCards["player2Div"].src = "images/whiteCard.jpg";
                currentTwoCards["player1Div"].src = "images/whiteCard.jpg";
                currentTwoCards["player2Div"].style.border = "2px solid green",
                    currentTwoCards["player1Div"].style.border = "2px solid red";
                historyElement.textContent += `[${playerOneChoise.textContent+" vs "+ playerTwoChoise.textContent}] `
                playerOneChoise.textContent = ""
                playerTwoChoise.textContent = ""
            } else if (Number(playerOneChoise.textContent) === Number(playerTwoChoise.textContent)) {
                playerOneChoise.textContent = ""
                playerTwoChoise.textContent = ""
            }
            currentTwoCards = {};
        }

    }


}