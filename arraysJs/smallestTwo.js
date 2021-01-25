function smallestTwo(array) {
    //     Write a function that prints the two smallest elements from an array of numbers.
    // The input comes as array of number elements.
    // The output is printed on the console on a single line, separated by space.

    let a = array.sort((a, b) => a - b).slice(0, 2).join(" ");
    console.log(a);

}

smallestTwo([30, 15, 50, 5]);