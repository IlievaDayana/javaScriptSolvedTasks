function nth(array) {
    const step = array.slice(-1)[0];
    for (let i = 0; i < array.length - 1; i += Number(step)) {
        console.log(array[i]);
    };
}

nth(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
])