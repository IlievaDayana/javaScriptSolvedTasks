// in the system if a function is used to get all the repetitions optimized it does not give full score?!

// You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.
// Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as much bottles as you can, and store what is left from the juice.
// Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
// Input
// The input comes as array of strings. Each element holds data about a juice and quantity in the following format:
// “{juiceName} => {juiceQuantity}”

// Output
// The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

function a(array) {
    let result = new Map;
    let wait = {};
    for (let item of array) {
        let [fruit, quantity] = item.split(" => ");
        quantity = Number(quantity);
        let left = 0;
        let bottlesMade = 0;
        if (quantity >= 1000) {
            bottlesMade = (quantity - (quantity % 1000)) / 1000;
            left = (quantity % 1000);
            if (left > 0) {
                if (!wait.hasOwnProperty(fruit)) {
                    wait[fruit] = 0;
                }
                wait[fruit] += left;
            };
            if (!result.hasOwnProperty(fruit)) {
                result[fruit] = 0;
            }
            result[fruit] += bottlesMade;
        } else if (wait[fruit] + quantity >= 1000) {
            let totalQuantity = wait[fruit] + quantity;
            bottlesMade = (totalQuantity - (totalQuantity % 1000)) / 1000;
            wait[fruit] = totalQuantity - (bottlesMade * 1000);
            if (!result.hasOwnProperty(fruit)) {
                result[fruit] = 0;
            }
            result[fruit] += bottlesMade;
        } else {
            if (!wait.hasOwnProperty(fruit)) {
                wait[fruit] = 0;
            }
            wait[fruit] += quantity;
        }

    };
    for (let item in wait) {
        if (wait[item] >= 1000) {
            let made = (wait[item] - (wait[item] % 1000)) / 1000;
            wait[item] -= made * 1000;
            if (!result.hasOwnProperty(item)) {
                result[item] = 0;
            }
            result[item] += made;
        }
    }
    for (x in result) {
        if (result[x] > 0) {
            console.log(`${x} => ${result[x]}`)
        };
    };

}


a(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])
a(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])