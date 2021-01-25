function addRemove(array) {
    // Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be "add" or "remove". 
    // The initial number is 1. Each input command should increase that number, regardless of what it is.
    // Upon receiving an "add" command you should add the current number to your array. 
    // Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
    // The input comes as an array of strings. Each element holds a command. 
    // The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".

    let command = 1;
    let toPrint = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "add") {
            toPrint.push(command);
        } else if (array[i] === "remove") {
            toPrint.splice(-1, 1);
        };

        command += 1;


    };
    if (toPrint.length === 0) {
        console.log("Empty");
    } else {
        for (let i = 0; i < toPrint.length; i++) {
            console.log(toPrint[i]);
        }
    };
}

addRemove(['add',
    'add',
    'remove',
    'add',
    'add'
])

addRemove(['remove',
    'remove',
    'remove'
])