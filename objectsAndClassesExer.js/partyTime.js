function solve(input) {
    //     There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
    // When guests come to the party check if he/she exists in any of the two reservation lists. 
    // The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
    // All VIP numbers start with digit
    // When you receive the command "PARTY" the guests start coming.
    // Print the count of guests then all guest, who didn't come to the party (VIP must be first) 

    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(VIP.length + regular.length);
    VIP.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x));
}

solve(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]

)
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])