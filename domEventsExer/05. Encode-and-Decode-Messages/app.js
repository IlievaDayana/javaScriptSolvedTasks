function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName("button");
    for (button of buttons) {
        if (button.innerText === "Encode and send it") {
            button.addEventListener("click", encodeAndSendMsg);
        } else if (button.innerText === "Decode and read it") {
            button.addEventListener("click", decodeAndReadMsg);
        }
    }
    // When the [Encode and send it] button is clicked, you should get the given message from the first textarea.
    // When you get the current message, you should encode it as follows:
    // •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, 
    //that represent the current character in that message
    // •	Clear the sender textarea and append the encoded message to the receiver textarea

    function encodeAndSendMsg(e) {
        let parent = e.target.parentElement;
        let textAreaElement = document.getElementsByTagName("textarea");
        let textValue = textAreaElement[0].value;
        textValue = textValue
            .split('')
            .map(x => String.fromCharCode(Number(x.charCodeAt(0) + 1)))
            .join('');
        textAreaElement[0].value = ""
        textAreaElement[1].value = textValue

    }

    // When the [Encode and send it] button is clicked, you should get the given message from the first textarea.
    // When you get the current message, you should encode it as follows:
    // •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, 
    //that represent the current character in that message
    // •	Clear the sender textarea and append the encoded message to the receiver textarea

    // After clicking [Encode and send it] button the result should be:

    // After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver 
    //textarea and do the opposite logic from encoding:
    // •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
    // •	Replace the encoded message with the already decoded message in the receiver textrea, to make it readable

    function decodeAndReadMsg(e) {
        let parent = e.target.parentElement;
        let textAreaElement = document.getElementsByTagName("textarea");
        let textValue = textAreaElement[1].value;
        textValue = textValue
            .split('')
            .map(x => String.fromCharCode(Number(x.charCodeAt(0) - 1)))
            .join('');
        textAreaElement[1].value = textValue
    }

}