function cardGame(array) {
    //     You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:
    // {personName}: {PT, PT, PT,… PT}
    // Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
    // A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
    // Finally print out the total value each player has in his hand in the format:
    // {personName}: {value}

    let players = {}
    const powers = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };
    let types = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };

    for (let i = 0; i < array.length; i++) {
        let [person, x] = array[i].split(": ");
        let y = x.split(", ");
        if (person in players) {
            players[person] = players[person].concat(y);
        } else {
            players[person] = y;
        }
    }
    for (key in players) {
        players[key] = [...new Set(players[key])];
        total = 0;
        for (value of players[key]) {
            let [power, type] = value.split("");
            if (value.includes("10")) {
                power = "10";
                type = value[2];
            }
            total += powers[power] * types[type];
        }
        players[key] = total;
    }
    for (let key in players) {
        console.log(key + ": " + players[key]);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])