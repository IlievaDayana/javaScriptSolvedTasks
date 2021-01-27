function generateReport() {
    let checked = [...document.querySelectorAll("th")];
    let nameColumnIndx = {};

    index = 0;
    for (input of checked) {
        if (input.querySelector("input").checked) {
            nameColumnIndx[input.textContent] = index;
        }
        index++;
    }

    let output = [];
    let rows = document.querySelector("tbody").querySelectorAll("tr");
    for (row of rows) {
        let rowData = row.querySelectorAll("td");
        let data = {}
        for ([key, value] of Object.entries(nameColumnIndx)) {
            data[key.toLowerCase().trim()] = rowData[value].textContent;
        }
        output.push(data);
    }
    let toDisplay = JSON.stringify(output);
    let x = document.querySelector("#output");
    x.textContent = toDisplay;
}