function rotate(a) {
    // Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the 
    // first, upon rotation. 
    // The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
    // The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

    let array = a.slice(0, a.length - 1);
    const last = Number(a.slice(-1)[0])
    for (let i = 0; i < last; i++) {
        lastElement = array.splice(-1, 1);
        array.unshift(lastElement);
    };
    console.log(array.join(" "));
}

// unshift -> array <- push
// shift   <- array -> pop

rotate(['1',
    '2',
    '3',
    '4',
    '2'
])

rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
])