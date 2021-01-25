function delimiter(array) {
    // The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
    // The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.

    let sliced = array.slice(0, array.length - 1);
    let last = array.slice(-1)[0];
    console.log(sliced.join(last));

}

delimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])

delimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
])