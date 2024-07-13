function createAndDeleteElement() {

    const userInput = document.querySelector('input[type=text]');
    const items = document.getElementById('items');
    const newElement = document.createElement('li');
    const deleteBtn = document.createElement('button');

    if (!userInput.value) {
        alert('Cannot add empty text field!');
    } else {
        newElement.innerHTML = userInput.value;
        deleteBtn.className = 'delete-item'
        deleteBtn.innerHTML = 'x';
        newElement.appendChild(deleteBtn);
        items.appendChild(newElement);
        userInput.value = '';
        newElement.addEventListener('click', function () {
                newElement.setAttribute('contenteditable', 'plaintext-only');
        });

        deleteBtn.onclick = function() {
            items.removeChild(newElement);
        };
    }
}


