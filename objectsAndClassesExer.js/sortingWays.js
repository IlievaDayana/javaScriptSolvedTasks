function compare(dict) {
    // // по ключ
    // let keySorted = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]));


    // по стойност
    // let valuesSorted = Object.entries(dict).sort((a, b) => a[1] - b[1]);

    // // по ключ и по стойност
    // let valueKeysort = Object.entries(dict).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // let KeysValuesSorted = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]) || b[1] - a[1]);

    // по ключ и по ключ на вложения обекти
    let keyValueofKey = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]) || a[0][0].localeCompare(b[0][0]));

}

compare({
    "Dayana1": {
        "G": 5,
        "Q": 7,
        "T": 1
    },
    "Dayana2": {
        "B": 4,
        "A": 7,
        "E": 0
    },
    "Qa": 51,
    "Kukuku": 8,
    "Adams": 10,
    "Chocolate": 800,
    "Q": 50,
    "Qb": 50,
    "Qc": 1,
})