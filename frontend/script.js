async function loadTodos() {
  const response = await fetch('/api/GetTodos');
  const todos = await response.json();

  const list = document.getElementById('todoList');
  list.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById('todoInput');
  await fetch('/api/AddTodo', {
    method: 'POST',
    body: JSON.stringify({ text: input.value })
  });
  input.value = '';
  loadTodos();
}

loadTodos();

