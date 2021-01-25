function main(lines) {
    // Write a function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
    // The input comes as an array of numbers.
    // The output is the processed array after the filtration, which should be a non-decreasing subsequence. Return the array of numbers.

    lines = lines.map(Number);
    let result = [];
    let biggest = lines[0];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] >= biggest) {
            result.push(lines[i]);
            biggest = lines[i];
        }
    }
    console.log(result.join('\n'));
}

incrSequance([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

incrSequance([20,
    3,
    2,
    15,
    6,
    1
]);