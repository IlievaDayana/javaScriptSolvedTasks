function equalN(matrix) {
    // Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
    // The input comes as array of arrays, containing string elements (2D matrix of strings).
    // The output is return value of your function. Save the number of equal pairs you find and return it.

    function defineInMatrix(x, y, matrixRange) {
        if (0 <= x <= matrixRange && 0 <= y <= matrixRange) {
            return true;
        } else {
            return false;
        };
    };

    let result = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            currentNum = matrix[i][x];
            if (defineInMatrix(i + 1, x, matrix.length)) {
                if (currentNum === matrix[i + 1][x]) {
                    result += 1
                };
            } else if (defineInMatrix(i - 1, x, matrix.length)) {
                if (currentNum === matrix[i - 1][x]) {
                    result += 1
                };
            } else if (defineInMatrix(i, x + 1, matrix.length)) {
                if (currentNum === matrix[i][x + 1]) {
                    result += 1
                };
            } else if (defineInMatrix(i, x - 1, matrix.length)) {
                if (currentNum === matrix[i - 1][x - 1]) {
                    result += 1
                };
            } else if (defineInMatrix(i, x - 1, matrix.length)) {
                if (currentNum === matrix[i - 1][x - 1]) {
                    result += 1
                };
            }

        };

    };
    console.log(result);
}


equalN([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
equalN([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])