const taskList = document.getElementById('taskList');

function addTask() {
  const input = document.getElementById('newTaskInput');
  const taskText = input.value.trim();
  if (!taskText) return;

  const task = document.createElement('div');
  task.className = 'todo-item';

  task.innerHTML = `
    <input type="checkbox" onchange="toggleDone(this)">
    <span class="text">${taskText}</span>
    <div class="actions">
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;
  taskList.appendChild(task);
  input.value = '';
}

function toggleDone(checkbox) {
  const task = checkbox.closest('.todo-item');
  task.classList.toggle('done', checkbox.checked);
}

function deleteTask(btn) {
  const task = btn.closest('.todo-item');
  task.remove();
}

function editTask(btn) {
  const task = btn.closest('.todo-item');
  const textEl = task.querySelector('.text');
  const newText = prompt("Edit your note:", textEl.textContent);
  if (newText !== null) {
    textEl.textContent = newText;
  }
}

function searchTasks() {
  const filter = document.getElementById('searchInput').value.toLowerCase();
  const tasks = document.querySelectorAll('.todo-item');
  tasks.forEach(task => {
    const text = task.querySelector('.text').textContent.toLowerCase();
    task.style.display = text.includes(filter) ? '' : 'none';
  });
}
