function solve() {
    //     Write a function that converts a decimal number to binary and hexadecimal.
    // The given number will always be in decimal format. The "From" select menu will only have a
    // Decimal option, but the "To" select menu will have two options: Binary and Hexadeicmal. 
    // This means that our program should have the functionality to convert decimal to binary and
    // decimal to hexadecimal.
    // Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') 
    //inside before continue. Also they should have values ('binary' and 'hexadecimal').
    // When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.


    let menuToElement = document.getElementById("selectMenuTo");

    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.innerHTML = "Binary";

    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.innerHTML = "Hexadecimal";

    menuToElement.appendChild(hexadecimalOption);
    menuToElement.appendChild(binaryOption);

    let buttonElement = document.getElementsByTagName("button")[0];

    let input = document.getElementById("input")
    let result = document.getElementById("result");


    buttonElement.addEventListener("click", function() {
        if (menuToElement.value === "hexadecimal") {
            result.value = Number(input.value).toString(16).toUpperCase();
        } else if (menuToElement.value === "binary") {
            result.value = Number(input.value).toString(2);
        }
    })
}