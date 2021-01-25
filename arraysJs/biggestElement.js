function biggestElem(matrix) {
    // Write a function that finds the biggest element inside a matrix.
    // The input comes as array of arrays, containing number elements (2D matrix of numbers).
    // The output is the return value of your function. Find the biggest element and return it.

    currentElement = -99999999999
    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            if (matrix[i][x] > currentElement) {
                currentElement = matrix[i][x]
            };
        };
    };
    console.log(currentElement)
}

biggestElem([
    [20, 50, 10],
    [8, 33, 145]
]);