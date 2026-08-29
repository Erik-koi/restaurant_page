// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function createTodoItem(todo) {
  const li = document.createElement('li');

  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerText = 'X';

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', true);
  }

  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);

  input.addEventListener('change', event => {
    todo.completed = event.target.checked;
    console.log('todoList', todoList);
  });

  button.addEventListener('click', event => {
    const index = todoList.findIndex(item => item?.id === todo.id);

    if (index > -1) {
      todoList.splice(index, 1);
    }

    console.log('index', index);
    console.log('todoList', todoList);

    ul.removeChild(li);
  });

  return li;
}

const ul = document.querySelector('ul');

for (let todo of todoList) {
  const li = createTodoItem(todo);
  ul.insertAdjacentElement('beforeend', li);
}

const addButton = document.querySelector('button.add-btn');

console.log('addButton', addButton);

addButton.addEventListener('click', () => {
  console.log('add button clicked');

  const dialog = document.querySelector('dialog');
  dialog.show();

  const form = dialog.querySelector('form');

  form.removeEventListener('submit', handleFormSubmit);
  form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const input = form.querySelector('input');
  const newTodoTask = input.value.trim();

  if (newTodoTask === '') {
    alert('Введите задачу!');
    return;
  }

  const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

  const newTodoObject = {
    id: newId,
    task: newTodoTask,
    completed: false,
  };

  todoList.push(newTodoObject);

  const newLi = createTodoItem(newTodoObject);
  ul.insertAdjacentElement('beforeend', newLi);

  form.reset();

  const dialog = form.closest('dialog');
  if (dialog) {
    dialog.close();
  }

  console.log('todoList', todoList);
}
