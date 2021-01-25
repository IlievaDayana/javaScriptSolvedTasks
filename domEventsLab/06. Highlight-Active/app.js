function focus() {
    //  Write a function that highlights the currently active section of a document. There will be multiple divs with 
    // input fields inside them. Set the class of the div that contains the currently focused input field to "focus".
    //  When focus is lost (blurred), remove the class from the element.
    // Submit only the focus() function in judge.
    let inputFields = document.getElementsByTagName("input")
    for (element of inputFields) {
        element.addEventListener("focus", changeClassName);
        element.addEventListener("blur", changeToBlur)
    }


    function changeClassName(a) {
        a.target.parentElement.className = "focused"
    }

    function changeToBlur(a) {
        a.target.parentElement.className = ""
    }
}