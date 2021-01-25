function growingWord() {

    //     Every time when we click on the [CHANGE] button, the color and the size of the paragraph which contains "Growing Word" 
    //should change!
    // After every click, the current paragraph font size should be changed to the current font size multiplied by 2. 
    //Also, the color of that paragraph should change, depending on the previous color.

    let exElement = document.getElementById("exercise");
    let headingElement = exElement.querySelector("p")

    let anotherElement = document.getElementsByClassName("conditions")[0]
    let anotherParagraphElement = anotherElement.getElementsByTagName("p")[1]

    if (headingElement.style.fontSize) {
        headingElement.style.fontSize = `${parseFloat(headingElement.style.fontSize)*2}px`
    } else {
        headingElement.style.fontSize = `2px`
    }

    if (anotherParagraphElement.style.fontSize) {
        anotherParagraphElement.style.fontSize = `${parseFloat(anotherParagraphElement.style.fontSize)*2}px`
    } else {
        anotherParagraphElement.style.fontSize = `2px`
    }


    let currentColor = headingElement.style.backgroundColor;
    if (currentColor === "red") {
        headingElement.style.backgroundColor = "blue"
    } else if (currentColor === "blue") {
        headingElement.style.backgroundColor = "green"
    } else if (currentColor === "green") {
        headingElement.style.backgroundColor = "red"
    } else { headingElement.style.backgroundColor = "blue" }

    let a = anotherParagraphElement.style.backgroundColor;
    if (a === "red") {
        anotherParagraphElement.style.backgroundColor = "blue"
    } else if (a === "blue") {
        anotherParagraphElement.style.backgroundColor = "green"
    } else if (a === "green") {
        anotherParagraphElement.style.backgroundColor = "red"
    } else { anotherParagraphElement.style.backgroundColor = "blue" }

}