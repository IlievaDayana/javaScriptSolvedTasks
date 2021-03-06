function a(b) {
    //     You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
    // Input
    // The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
    // Output
    // •	The output should be an array of objects wrapped in JSON.stringify(). 
    // •	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!

    let arr = [];
    let information = b.map(row => row.split("|")
        .filter(x => x != "")
        .map(x => x.trim()));
    const keys = information[0];

    for (var i = 1; i < information.length; i++) {
        let dict = {}
    };
    console.log(JSON.stringify(arr))
}

a(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])

a(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])