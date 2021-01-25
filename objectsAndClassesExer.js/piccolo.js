function piccolo(arr) {
    // Write function that:
    // •	Records a car number for every car that enters the  parking lot
    // •	Removes a car number when the car goes out
    // •	Input will be array of strings in format [direction, carNumber]
    // Print the output with all car numbers which are in the parking lot sorted in ascending by number
    // If parking lot is empty , print: "Parking Lot is Empty"

    let cars = [];

    for (let carDetails of arr) {
        let [direction, number] = carDetails.split(', ');
        if (direction === 'IN') {
            if (!(cars.includes(number))) {
                cars.push(number);
            }
        } else if (direction === 'OUT') {
            if (cars.includes(number)) {
                let index = cars.indexOf(number);
                cars.splice(index, 1);
            }
        }
    }
    console.log(cars)
    if (cars.length > 0) {
        let sorted = cars.sort((a, b) => a.localeCompare(b));
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty');
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])