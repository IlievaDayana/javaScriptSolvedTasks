function solve() {
    let alphabet = {
        "A": 0,
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5,
        "G": 6,
        "H": 7,
        "I": 8,
        "J": 9,
        "K": 10,
        "L": 11,
        "M": 12,
        "N": 13,
        "O": 14,
        "P": 15,
        "Q": 16,
        "R": 17,
        "S": 18,
        "T": 19,
        "U": 20,
        "V": 21,
        "W": 22,
        "X": 23,
        "Y": 24,
        "Z": 25
    }
    let buttonElement = document.getElementsByTagName("button")[0]
    let listElements = document.getElementsByTagName("li");
    buttonElement.addEventListener("click", function() {
        let nameOfStudent = document.querySelector("input").value;
        nameOfStudent = nameOfStudent[0].toUpperCase() + nameOfStudent.slice(1).toLowerCase();
        let indexToPlaceName = alphabet[(nameOfStudent[0])];
        if (listElements[indexToPlaceName].innerText !== "") {
            listElements[indexToPlaceName].innerText += `, ${nameOfStudent}`
        } else {
            listElements[indexToPlaceName].innerText += `${nameOfStudent}`
        }

        document.querySelector("input").value = ""
    })

}