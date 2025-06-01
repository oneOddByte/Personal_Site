document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const newTaskInput = document.getElementById('new-task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const todoTasks = document.getElementById('todo-tasks');
  const doingTasks = document.getElementById('doing-tasks');
  const doneTasks = document.getElementById('done-tasks');
  const todoCount = document.getElementById('todo-count');
  const doingCount = document.getElementById('doing-count');
  const doneCount = document.getElementById('done-count');
  
  // State
  const tasks = JSON.parse(localStorage.getItem('tasks')) || {
    todo: [],
    doing: [],
    done: []
  };
  let selectedTaskId = null;
  let draggedTask = null;
  
  // Initialize
  renderTasks();
  updateCounts();
  
  // Event Listeners
  addTaskBtn.addEventListener('click', addNewTask);
  newTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addNewTask();
  });
  
  // Global keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Only trigger if not in an input field
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      // Focus new task input with 'N' key
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        newTaskInput.focus();
      }
      
      // Handle task navigation and actions
      if (selectedTaskId) {
        const currentColumn = findTaskColumn(selectedTaskId);
        
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          moveSelectedTask(currentColumn, e.key === 'ArrowRight' ? 1 : -1);
        } else if (e.key === 'Delete') {
          e.preventDefault();
          deleteTask(selectedTaskId);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          startEditing(selectedTaskId);
        }
      }
    }
  });
  
  // Functions
  function addNewTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
        created: new Date().toISOString()
      };
      
      tasks.todo.push(newTask);
      saveTasks();
      renderTasks();
      updateCounts();
      newTaskInput.value = '';
    }
  }
  
  function renderTasks() {
    todoTasks.innerHTML = '';
    doingTasks.innerHTML = '';
    doneTasks.innerHTML = '';
    
    renderTaskList(tasks.todo, todoTasks);
    renderTaskList(tasks.doing, doingTasks);
    renderTaskList(tasks.done, doneTasks);
  }
  
  function renderTaskList(taskList, container) {
    taskList.forEach(task => {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    });
  }
  
  function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';
    taskElement.setAttribute('data-id', task.id);
    taskElement.setAttribute('tabindex', '0');
    
    if (selectedTaskId === task.id) {
      taskElement.classList.add('selected');
    }
    
    // Task text
    const taskText = document.createElement('p');
    taskText.textContent = task.text;
    taskElement.appendChild(taskText);
    
    // Task actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';
    
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✏️';
    editBtn.setAttribute('aria-label', 'Edit task');
    editBtn.className = 'edit-btn';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    deleteBtn.className = 'delete-btn';
    
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    taskElement.appendChild(actionsDiv);
    
    // Event listeners
    taskElement.addEventListener('click', () => {
      selectTask(task.id);
    });
    
    taskElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        startEditing(task.id);
      }
    });
    
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      startEditing(task.id);
    });
    
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });
    
    // Drag and drop
    taskElement.setAttribute('draggable', 'true');
    
    taskElement.addEventListener('dragstart', (e) => {
      draggedTask = task;
      setTimeout(() => taskElement.classList.add('dragging'), 0);
      e.dataTransfer.setData('text/plain', task.id);
      e.dataTransfer.effectAllowed = 'move';
    });
    
    taskElement.addEventListener('dragend', () => {
      taskElement.classList.remove('dragging');
      draggedTask = null;
    });
    
    return taskElement;
  }
  
  function selectTask(taskId) {
    // Deselect previous task if any
    if (selectedTaskId) {
      const prevSelected = document.querySelector(`.task-item[data-id="${selectedTaskId}"]`);
      if (prevSelected) prevSelected.classList.remove('selected');
    }
    
    // Select new task
    selectedTaskId = taskId;
    const newSelected = document.querySelector(`.task-item[data-id="${taskId}"]`);
    if (newSelected) newSelected.classList.add('selected');
  }
  
  function startEditing(taskId) {
    const taskElement = document.querySelector(`.task-item[data-id="${taskId}"]`);
    if (!taskElement) return;
    
    const column = findTaskColumn(taskId);
    if (!column) return;
    
    const task = tasks[column].find(t => t.id === taskId);
    if (!task) return;
    
    // Remove existing content
    taskElement.innerHTML = '';
    
    // Create edit form
    const form = document.createElement('div');
    form.className = 'task-edit-form';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.text;
    input.setAttribute('aria-label', 'Edit task text');
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.className = 'cancel-btn';
    
    buttonsDiv.appendChild(saveBtn);
    buttonsDiv.appendChild(cancelBtn);
    
    form.appendChild(input);
    form.appendChild(buttonsDiv);
    taskElement.appendChild(form);
    
    // Focus input
    input.focus();
    
    // Event listeners
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveEdit(taskId, input.value);
      } else if (e.key === 'Escape') {
        cancelEdit();
      }
    });
    
    saveBtn.addEventListener('click', () => {
      saveEdit(taskId, input.value);
    });
    
    cancelBtn.addEventListener('click', () => {
      cancelEdit();
    });
  }
  
  function saveEdit(taskId, newText) {
    if (!newText.trim()) return;
    
    const column = findTaskColumn(taskId);
    if (!column) return;
    
    const taskIndex = tasks[column].findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;
    
    tasks[column][taskIndex].text = newText.trim();
    saveTasks();
    renderTasks();
  }
  
  function cancelEdit() {
    renderTasks();
  }
  
  function deleteTask(taskId) {
    const column = findTaskColumn(taskId);
    if (!column) return;
    
    tasks[column] = tasks[column].filter(t => t.id !== taskId);
    
    if\
