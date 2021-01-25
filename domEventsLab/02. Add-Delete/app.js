function addItem() {
    //Extend the previous problem to display a [Delete] link after each list item. Clicking it, should delete the item with no confirmation.
    let listElement = document.getElementById("items");
    0
    let item = document.createElement("li");

    let deleteLinkElement = document.createElement("a");
    deleteLinkElement.setAttribute("href", "#")
    deleteLinkElement.addEventListener("click", function(a) {
        a.target.parentElement.remove()
    })
    deleteLinkElement.innerText = "[Delete]"
    let newItemText = document.getElementById("newText")
    item.innerText = newItemText.value
    newItemText.value = ""

    listElement.appendChild(item)
    item.appendChild(deleteLinkElement)
}