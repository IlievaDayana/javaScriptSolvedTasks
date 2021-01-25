function deleteByEmail() {
    let inputField = document.getElementsByTagName("input")[0];
    let mail = inputField.value;


    let divIdResults = document.getElementById("result");

    for (item of document.getElementsByTagName("td")) {
        if (item.innerText === mail) {
            item.parentElement.remove();
            divIdResults.innerText = "Deleted."
            break;
        } else {
            divIdResults.innerText = "Not found."
        }
    }

    // Write a program that takes an e-mail from an input field and deletes the matching row from a table.
    // If no entry is found, an error should be displayed in a <div> with ID "results". The error should be "Not found." 
    //Submit only the deleteByEmail() function in judge. 
    // Input/Output
    // There will be no input/output, your program should instead modify the DOM of the given HTML document.
}