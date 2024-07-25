function removeItem(elementId) {

    const listItem = document.getElementById(elementId);
    if (listItem) {
        listItem.remove();
        console.log('Element ID:', elementId);
    } else {
        console.log('Element ID not found:', elementId);
    }
}

const idGenerator = {
    id: 0,
    increment: function () {
        return ++this.id;
    }
}

document.getElementById('add-button').addEventListener('click', function () {

    let id = idGenerator.increment();
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.setAttribute('id', `${id}`);
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.setAttribute('onclick', `removeItem(${id})`)
    listItem.innerHTML = task;

    if (task.length <= 0) {
        alert('Please enter a task name. Tasks cannot be empty.');
        return;
    }

    listItem.appendChild(removeBtn);
    list.appendChild(listItem);
    input.value = '';

});
