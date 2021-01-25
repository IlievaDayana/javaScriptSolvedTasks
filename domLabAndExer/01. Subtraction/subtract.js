function subtract() {
    // •	Your function should take the values of "firstNumber" and "secondNumber", 
    // convert them to numbers, subtract the second number from the first one and then append
    //  the result to the <div> with id="result".
    // •	Your function should be able to work with any 2 numbers in the inputs, 
    // not only the ones given in the example.
    let firstNumberElement = document.getElementById("firstNumber")
    let secondNumberElement = document.getElementById("secondNumber")
    let x = Number(firstNumberElement.value) - Number(secondNumberElement.value)
    let resultElement = document.getElementById("result")
    resultElement.textContent = x;

}