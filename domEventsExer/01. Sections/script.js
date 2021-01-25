function create(words) {
    // You will receive an array of strings. For each string, create a div with a paragraph with the string in it.
    // Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph.
    // Finally, you should append all divs to the element with an id "content".

    let content = document.getElementById("content")

    for (word of words) {
        let div = document.createElement("div");
        let par = document.createElement("p");
        par.style.display = "none";
        div.appendChild(par);
        par.innerText = word;
        content.appendChild(div);
        div.addEventListener("click", function() {
            par.style.display = "block"
        })
    }
}