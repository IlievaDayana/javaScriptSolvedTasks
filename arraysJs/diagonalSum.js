function diagonal(matrix) {
    // A square matrix of numbers comes as an array of strings, each string holding numbers (space separated).
    // Write a function that finds the sum at the main and at the secondary diagonals.
    // The input comes as array of arrays, containing number elements (2D matrix of numbers).
    // The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal,
    // then the sum at the secondary diagonal.

    d1 = 0;
    d2 = 0;
    i1 = 0
    i2 = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
        d1 += matrix[i][i1];
        i1 += 1;
        d2 += matrix[i][i2];
        i2 -= 1;
    };
    console.log(d1 + " " + d2);
}

diagonal([
    [20, 40],
    [10, 60]
])
diagonal([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])