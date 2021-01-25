function solve() {
    //Note: Do not forget to add event listener to the send button!
    //The new div element with class message my-message should contain the current message that is about to be send.
    //The current div should be appended to the div with an id="chat_messages".
    //The input should be cleared on each click of the send button.
    let textAreaElement = document.getElementById("chat_input")
    let buttonElement = document.getElementById("send")

    buttonElement.addEventListener("click", function() {
        let newDivElement = document.createElement("div")
        newDivElement.className = "message my-message"
        newDivElement.innerText = textAreaElement.value;

        let chatMessagesElement = document.getElementById("chat_messages")
        chatMessagesElement.appendChild(newDivElement)
        textAreaElement.value = ""
    })

}