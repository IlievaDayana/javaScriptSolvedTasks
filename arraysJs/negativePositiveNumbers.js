function negPosNums(array) {
    let arrayToPrint = [];

    array.forEach(function(item) {
        if (item < 0) {
            arrayToPrint.unshift(item);
        } else {
            arrayToPrint.push(item);
        }
    });
    arrayToPrint.forEach(function(item) {
        console.log(item);
    });
}

negPosNums([7, -2, 8, 9]);
negPosNums([3, -2, 0, -1]);