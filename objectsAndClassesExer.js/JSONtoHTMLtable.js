function e(info) {
    // You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, 
    // the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. Any text values 
    // in an object should be escaped, in order to avoid introducing dangerous code into the HTML. 
    // The input comes a single string argument (the array of objects).
    // The output should be printed on the console – for each entry row in the input print the object representing it.
    // Note:
    // Object’s keys will always be the same. Check more information for the HTML Entity here.
    // HTML
    // You are provided with an HTML file to test your table in the browser.

    let object = JSON.parse(info);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(object));
    outputArr.push(makeValueRow(object));
    outputArr.push(["</table>"]);

    function makeKeyRow(arr) {
        let infoToReturn = "<tr>"
        let a = arr[0];
        for (let key in a) {
            infoToReturn += "<th>" + key + "</th>";
        };
        infoToReturn += "</tr>";
        return infoToReturn;
    };

    function makeValueRow(obj) {
        let infoRet = []
        for (let i = 0; i < obj.length; i++) {
            let row = "<tr>";
            for (let key in obj[i]) {

                row += "<td>" + obj[i][key] + "</td>";
            };
            row += "</tr>";
            infoRet.push(row);
        };
        return infoRet.join("\n");
    };

    console.log(outputArr.join("\n"))
}

e(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, { "Name": "Gosho", "Age": 18, "City": "Plovdiv" }, { "Name": "Angel", "Age": 18, "City": "Veliko Tarnovo" }]'])