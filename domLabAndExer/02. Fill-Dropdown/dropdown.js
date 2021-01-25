function addItem() {
    let newItemElement = document.getElementById("newItemText");
    let newValueElement = document.getElementById("newItemValue");
    let textToAdd = newItemElement.value;
    let valueToAdd = newValueElement.value;

    let optionField = document.createElement("option")
    optionField.value = valueToAdd;
    optionField.textContent = textToAdd;

    let selectElement = document.getElementById("menu");
    selectElement.appendChild(optionField);

    newItemElement.value = ""
    newValueElement.value = ""

}