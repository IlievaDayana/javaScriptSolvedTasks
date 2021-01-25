function miner(a) {
    // You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
    // Print the resources and their quantities in format:
    // {resource} –> {quantity}
    // The quantities inputs will be in the range [1 … 2 000 000 000]

    let mine = {}
    for (let i = 0; i < a.length; i += 2) {
        if (!mine.hasOwnProperty(a[i])) {
            mine[a[i]] = Number(a[i + 1]);
        } else {
            mine[a[i]] += Number(a[i + 1])
        }

    }
    for (key in mine) {
        console.log(`${key} -> ${mine[key]}`)
    }
}


miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])