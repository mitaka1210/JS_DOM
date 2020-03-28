document.getElementById('addItem').addEventListener('click', addItem);

const deleteButton = document.getElementsByClassName('deleteButton');

for (let del of deleteButton) {
    del.addEventListener('click', deleteItem);
}

function addItem() {

    const newText = document.getElementById('newText').value;

    const elem = document.createElement('li');

    elem.innerHTML = newText + ' <a href="#" class = "deleteButton">Delete</a>';

    elem.childNodes[1].addEventListener('click', deleteItem);

    document.getElementById('items').appendChild(elem);

    document.getElementById('newText').value = "";
}

function deleteItem(evt) {

    document.getElementById('items').removeChild(evt.target.parentNode);

}