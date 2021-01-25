function solve() {
    // You will be given some furniture as an array of objects. Each object will have a name, a price and a decoration factor. 
    // When the "Generate" button is clicked, add a new row to the table for each piece of furniture with image, name, 
    //price and decoration factor (code example below). 
    // When the "Buy" button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture
    // that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1} {furniture2}…".
    // On the next line, print the total price in format: "Total price: {totalPrice}" (formatted to the second decimal point). 
    //Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"
    // Input Example

    // [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
    // Examples

    let buttonsGenerate = document.querySelectorAll("button");
    let textAreaGenerate = document.querySelectorAll("textarea")[0];
    let tbody = document.querySelector("tbody")

    for (button of buttonsGenerate) {
        if (button.innerText === "Generate") {
            button.addEventListener("click", generateItem)
        } else if (button.innerText === "Buy") {
            button.addEventListener("click", makePurchase)
        }
    }

    function generateItem() {
        let x = JSON.parse(textAreaGenerate.value);
        for (const info of x) {
            let row = document.createElement("tr");

            let td1 = document.createElement("td");
            let img = document.createElement("img");
            img.src = `${info.img}`;
            td1.appendChild(img);

            let td2 = document.createElement("td");
            let paraItemName = document.createElement("p");
            paraItemName.textContent = info.name;
            td2.appendChild(paraItemName);

            let td3 = document.createElement("td");
            let paraItemPrice = document.createElement("p");
            paraItemPrice.textContent = Number(info.price);
            td3.appendChild(paraItemPrice);

            let td4 = document.createElement("td");
            let paraDecoFactor = document.createElement("p");
            paraDecoFactor.textContent = Number(info.decFactor);
            td4.appendChild(paraDecoFactor);

            let td5 = document.createElement("td");
            let inputCheckBox = document.createElement("input");
            inputCheckBox.type = "checkbox"
            td5.appendChild(inputCheckBox);


            row.appendChild(td1)
            row.appendChild(td2)
            row.appendChild(td3)
            row.appendChild(td4)
            row.appendChild(td5)

            tbody.appendChild(row)
        }
    }

    let futniture = [];
    let total = 0;
    let avgFactor = 0;

    function makePurchase() {
        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        for (checkbox of checkboxes) {

            if (checkbox.checked) {
                let trow = checkbox.parentElement.parentElement;
                let data = trow.querySelectorAll("td");
                let furnitureName = data[1].children[0].textContent;
                let price = data[2].textContent;
                let decorF = data[3].textContent;
                futniture.push(furnitureName);
                total += Number(price);
                avgFactor += Number(decorF);
            }

        }
        itemsBought = "Bought furniture: " + futniture.join(", ");
        total = "Total price: " + Number(total).toFixed(2);
        avgFactor = "Average decoration factor: " + avgFactor / futniture.length;
        let textAreaOutput = document.querySelectorAll("textarea")[1];
        textAreaOutput.value = [itemsBought, total, avgFactor].join("\n")
    }
}