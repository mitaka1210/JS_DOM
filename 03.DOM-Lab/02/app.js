function addItem() {

    // debugger;

    const newText = document.getElementById('newText').value;

    const items = document.getElementById('items');

    const elem = document.createElement('li');

    const span = document.createElement('span');

    elem.appendChild(document.createTextNode(newText + " "));

    span.innerHTML = '<a href="#">[Delete]</a>';

    span.firstChild.addEventListener('click', deleteItem);

    elem.appendChild(span);
    items.appendChild(elem);
    document.getElementById('newText').value = "";




}

function deleteItem() {

    debugger;
    let elem = this.parentNode.parentNode;

    let ul = elem.parentNode;

    ul.removeChild(elem);

}