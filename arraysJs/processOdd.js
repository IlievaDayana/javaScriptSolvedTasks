function odd(array) {
    //     You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array,
    // doubled and in reverse order.
    // The input comes as array of number elements.
    // The output is printed on the console on a single line, separated by space.

    let toPrint = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            toPrint.push(array[i] * 2)
        };
    };
    console.log(toPrint.reverse().join(" "))

}

odd([10, 15, 20, 25])