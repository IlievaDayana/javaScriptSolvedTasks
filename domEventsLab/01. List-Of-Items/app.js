function addItem() {
    let listElement = document.getElementById("items");
    //Write a function that read the text inside an input field and appends the specified text to a list inside an HTML page.
    let item = document.createElement("li");
    let newItemText = document.getElementById("newItemText")
    item.innerText = newItemText.value
    newItemText.value = ""

    listElement.appendChild(item)
}