function i(matrix) {
    console.log(matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2])
    console.log(matrix[1][0] === false)
    console.log(matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][1] !== false)
    console.log(matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][1] !== false)
    console.log(true === true)
    console.log(false === false)
}

i([
    [false, false, false],
    [false, false, false],
    [false, false, false]
])