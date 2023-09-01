import { factory } from './domfactory.js'
import { showNotes } from './showNotes.js'
import { todos } from './todoData.js'

export const todoFactory = (title, description, notes, dueDate, priority, list) => {
  const todoContainer = document.getElementById('todoContainer')
  const todoDiv = factory('div', { id: `${title}`, class: 'collapsible' })
  const todoTitle = factory('h1', { id: `todoTitle_${title}`, contentEditable: 'true' }, `${title}`)
  const todoDescription = factory('p', { class: 'description', contentEditable: 'true' }, `${description}`)
  const todoNotes = factory('p', { class: `notes`, contentEditable: 'true' }, `${notes}`)
  const tododueDate = factory('input', { type: 'date', class: `dueDate`, contentEditable: 'true' }, `${dueDate}`)

  const todoPriority = factory('select', { class: `priority`, contentEditable: 'true' });
  const highOption = factory('option', { value: 'high' }, 'High Priority');
  const mediumOption = factory('option', { value: 'medium' }, 'Medium Priority');
  const lowOption = factory('option', { value: 'low' }, 'Low Priority');
  todoPriority.append(highOption, mediumOption, lowOption);
  todoPriority.value = priority;

  const todoChecked = factory('input', { type: 'checkbox' })
  const todoDelete = factory('button', { class: 'delete' })
  const todoShow = factory('button', { class: 'shownotes' })
  const todoList = factory('p', { class: `list` }, `${list}`);
  const buttonContainer = factory('div', { class: 'buttonContainer' });

  tododueDate.value = dueDate


  todoShow.textContent = 'Show Notes'
  todoDelete.textContent = 'Delete Todo'

  const index = todos.findIndex((todo) => todo.title === title)

  todoTitle.addEventListener('blur', () => {
    console.log(todos)
    if (index !== -1) {
      todos[index].title = todoTitle.textContent
    }
  })

  todoDescription.addEventListener('input', () => {
    todoDescription.addEventListener('blur', () => {
      todos[index].description = todoDescription.textContent
    })
  })

  todoNotes.addEventListener('input', () => {
    todoNotes.addEventListener('blur', () => {
      todos[index].notes = todoNotes.textContent
    })
  })

  tododueDate.addEventListener('input', () => {
    tododueDate.addEventListener('blur', () => {
      todos[index].dueDate = tododueDate.textContent
    })
  })

  todoPriority.addEventListener('change', () => {
    const index = todos.findIndex((todo) => todo.title === title);
    todos[index].priority = todoPriority.value;
  });

  todoList.addEventListener('blur', () => {
    todos[index].list = todoList.textContent
  })

  todoShow.addEventListener('click', showNotes)

  todoDelete.addEventListener('click', () => deleteTodo.bind(todoDiv, todos.id)());

  function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id)
    todos.splice(index, 1)
    this.remove()
    console.log(todos)
  }

  todoChecked.addEventListener('click', todoDone)

  if (todos[index].checked) {
    todoChecked.checked = true;
  }


  function todoDone() {
    const index = todos.findIndex((todo) => todo.title === title);
    console.log(todos[index].checked);

    if (todoChecked.checked == true) {
      todos[index].checked = true;
      this.parentNode.parentNode.style.opacity = '0.7'; // set opacity to 50%
      console.log('checked bitch')
    } else {
      todos[index].checked = false;
      console.log('unchekckckerd')

      this.parentNode.parentNode.style.opacity = '1'; // set opacity back to 100%
    }
    console.log(todos)
  }


  todos[index].value = todoDue.value
  buttonContainer.append(todoChecked, todoShow, todoDelete);
  todoDiv.append(todoTitle, todoDescription, todoNotes, tododueDate, todoPriority, buttonContainer);
  todoContainer.appendChild(todoDiv)


  const checkedTodos = todos.filter(todo => todo.checked);
  checkedTodos.forEach(todo => {
    const todoCompletedSelect = document.getElementById(todo.title);
    if (todoCompletedSelect) {
      const checkedTodoItem = todoCompletedSelect.querySelector('input[type="checkbox"]');
      checkedTodoItem.checked = true;
      todoCompletedSelect.style.opacity = '0.7';
    }
  });

  return { title, description, notes, dueDate, priority, list: todoList.textContent };


}



