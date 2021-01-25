function solve() {
    //     When the [Format] button is clicked, you need to format the text inside the paragraph with an id "input". 
    //The formatting is done as follows:
    // •	You need to create a new paragraph element which holds no more than 3 sentences from the given input.
    // •	If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and 
    //append this paragraph to the div with an id "output". 
    // Otherwise, when you have more than 3 sentences in that input paragraph, you need to create enough paragraphs to get all sentences 
    //from the input text.
    // Just remember to restrict the sentences in each paragraph to 3.

    let inputElement = document.getElementById("input");
    let text = inputElement.innerText;
    let listSentances = text.split(". ");
    let filteredSentences = listSentances.filter(item => item.length > 0);

    if (filteredSentences.length > 3) {
        for (i = 0; i < filteredSentences.length; i += 3) {
            let paragraph = filteredSentences.slice(i, i + 3);
            paragraph = paragraph.join(". ");
            if (paragraph[paragraph.length - 1] !== ".") {
                paragraph += "."
            }

            let divElement = document.getElementById("output");

            let newParagraph = document.createElement("p");
            newParagraph.innerHTML = paragraph;
            divElement.appendChild(newParagraph);
        }
    } else {
        let divElement = document.getElementById("output");

        let newParagraph = document.createElement("p");

        newParagraph.innerHTML = filteredSentences.join(". ");
        divElement.appendChild(newParagraph);
    }
}