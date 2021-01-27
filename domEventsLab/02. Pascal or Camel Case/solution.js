function solve() {
    // An html file is given and your task is to write a function that takes two string parameters as an input and transform the first 
    //parameter to the type required by the second parameter.
    // •	The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always 
    //be separated by space.
    // •	The second parameter will be either "Camel Case" or "Pascal Case". In case of a different input, you your output should be "Error!"
    // When the button is clicked the function should convert the first string to either of the cases. The output should consist of 
    //only one word - the string you have modified. Once your output is done, you should set it as a HTML to the <span> element. 
    //For more information, see the examples below:

    let toConvertField = document.querySelector("#text");
    let formatField = document.querySelector("#naming-convention");

    let outputField = document.querySelector("#result");

    if (formatField.value === "Pascal Case") {
        outputField.innerHTML = convert(toConvertField.value)
    } else if (formatField.value === "Camel Case") {
        let a = convert(toConvertField.value);
        a = a.split("");
        a[0] = a[0].toLowerCase();
        outputField.innerHTML = a.join("");
    } else {
        outputField.innerHTML = "Error!"
        console.log(formatField.value)
    }


    function convert(word) {

        let x = word.toLowerCase().split(" ");
        for (i = 0; i < x.length; i++) {
            let word = x[i].split("");
            word[0] = word[0].toUpperCase();
            word = word.join("");
            x[i] = word;
        }

        return x.join("");

    }
}