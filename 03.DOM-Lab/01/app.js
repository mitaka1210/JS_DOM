function addItem() {
    debugger;
    const newItemText = document.getElementById('newItemText').value;

    const mylist = document.getElementById("items");

    const elem = document.createElement("li");
    elem.textContent = newItemText;

    mylist.appendChild(elem)
    document.getElementById('newItemText').value = "";
}