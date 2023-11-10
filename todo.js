const todo = [{
    name:'',
    dueDate:'',
    time:''
}];
let str = '';
renderTodoList();

function renderTodoList() {
    str = '';
    for (let i = 0; i < todo.length; i++) {
        const todoObject = todo[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate,time} = todoObject;
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <div>${time}</div>
            <button class="delete-button" onclick="deleteTodoItem(${i})">Delete</button>
        `;
        str += html;
    }
    document.querySelector('.js-todo-list').innerHTML = str;
}

function deleteTodoItem(index) {
    todo.splice(index, 1);
    renderTodoList();
}

function addTodo() {
    const inText = document.querySelector('.js-name-input');
    const name = inText.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    const timeInputElement = document.querySelector('.js-due-time-input');
    const time = timeInputElement.value;
    todo.push({
        name : name,
        dueDate: dueDate,
        time:time
    });
    inText.value = '';
    renderTodoList();
}
