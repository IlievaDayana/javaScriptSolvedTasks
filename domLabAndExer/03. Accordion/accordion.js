function toggle() {
    // An html file is given and your task is to show more/less information by clicking a [ADD] button 
    // (it is not an actual button, but a span that has an onclick event attached to it). 
    // When [More] button is clicked, it reveals the content of a hidden div and changes the text of the button to [Less]. 
    //When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
    //Link action should be toggleable (you should be able to click the button infinite amount of times).
    // To change the text content of a button, you could use getElementsByClassName. However, that returns a collection and we 
    // need only one element from it, so the correct way is to use getElementsByClassName("button")[0] as it will return the needed 
    // span element.
    //	After that we should change the display style of the div with an id "extra". If the display style is "none", 
    // we should change it to "block" and the opposite.
    // Along with all of this, we should change the text content of the button to [Less]/[More].

    let spanElement = document.getElementsByClassName("button")[0];
    let extraElement = document.getElementById("extra");

    if (spanElement.innerHTML === "More") {
        spanElement.innerHTML = "Less";
    } else {
        spanElement.innerHTML = "More";
    }

    if (extraElement.style.display === "none") {
        extraElement.style.display = 'block'
    } else {
        extraElement.style.display = 'none'
    }

}