function dAttack(text) {
    //     Write a JS function that reads a given matrix of numbers and checks if both main diagonals have equal sum.
    // If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
    // The input comes as array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix
    // of numbers, so you can work with it.
    // The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum or the original matrix,
    // if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. 
    function convertTextToMatrix(text) {
        let matrixNumbers = [];
        for (let i = 0; i < text.length; i++) {
            matrixNumbers.push(text[i].split(" "));
        };
        return matrixNumbers;
    }

    function diagonal(matrix) {
        d1 = 0;
        d2 = 0;
        i1 = 0;
        i2 = matrix.length - 1;
        indexes = []
        for (let i = 0; i < matrix.length; i++) {
            indexes.push([i1, i2]);
            d1 += Number(matrix[i][i1]);
            i1 += 1;
            d2 += Number(matrix[i][i2]);
            i2 -= 1;
        };
        return [d1, d2, indexes];
    };

    function formatPrint(matrix) {
        let stringInfo = []
        for (let i = 0; i < matrix.length; i++) {
            stringInfo.push(matrix[i].join(" "));
        }
        return stringInfo.join("\n")
    };

    function changeExceptDiagonal(matrix, listWithDiagonalIndexes, digit) {
        for (let i = 0; i < matrix.length; i++) {
            for (let q = 0; q < matrix[i].length; q++) {
                f1 = listWithDiagonalIndexes[i][0];
                f2 = listWithDiagonalIndexes[i][1];
                if (f1 !== q && f2 !== q) {
                    matrix[i][q] = digit;
                };
            };
        };
        return matrix;
    }
    let myMatrix = convertTextToMatrix(text)
    let sumsDiagonal = diagonal(myMatrix);
    let a = sumsDiagonal[0];
    let b = sumsDiagonal[1];
    let indexForNumsInDiagonals = sumsDiagonal[2];
    if (a === b) {
        let newMatrix = changeExceptDiagonal(myMatrix, indexForNumsInDiagonals, a);
        console.log(formatPrint(newMatrix));
    } else {
        console.log(formatPrint(myMatrix));
    };
}


dAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])

dAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
])