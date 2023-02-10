import { factory } from "./domfactory";
import { todoData, todos, addTodo, getTodos } from "./todoData";
import { showNotes } from './showNotes.js'
import { todoFactory } from './todoFactory.js'
import { listNav } from "./listNav";
import { currentSelected, loadList, selectedList, setSelect } from "./loadList";

export const newTodo = () => {
  const inputContainer = factory('div', { id: 'inputContainer' })
  const todoTitle = factory('input', { id: 'todoTitle', type: 'text', placeholder: 'Title' })
  const todoDescription = factory('input', { id: 'todoDecription', type: 'text', placeholder: 'Description' })
  const todoNotes = factory('input', { id: 'todoNotes', type: 'text', placeholder: 'Notes' })
  const todoPriority = factory('input', { id: 'todoPriority', type: 'text', placeholder: 'Priority' })
  const todoDue = factory('input', { id: 'todoDue', type: 'text', placeholder: 'Due Date' })
  const newBtn = factory('button', { id: 'newTodo', value: 'New Todo' })
  newBtn.addEventListener('click', createTodo)

  const todoOption = factory('select', { id: 'todoOption', placeholder: 'Current Selected List', value: selectedList })
  const optionPlaceholder = factory('option', { id: 'listPlaceholder', value: selectedList, selected: true })
  optionPlaceholder.textContent = '-- Current list selected -- '





  const listContainer = document.getElementById('lists')
  todoOption.appendChild(optionPlaceholder)
  inputContainer.append(todoTitle, todoDescription, todoNotes, todoDue, newBtn, todoOption);
  listContainer.appendChild(inputContainer)





  function createTodo() {
    // Store the new todo in the todoData


    addTodo(todoTitle.value, todoDescription.value, todoNotes.value, todoDue.value, todoPriority.value, todoOption.value);
    const loadTodo = todoFactory(todoTitle.value, todoDescription.value, todoNotes.value, todoDue.value, todoPriority.value, todoOption.value);



    let listValues = todos.map(({ list }) => list)
    for (let i = 0; i < 5; i++) {
      inputContainer.children.item(i).value = '';



    }
    console.log(selectedList)
    console.log(todos)

  }
  updateList()
};


export const updateList = () => {

  const todoOption = document.getElementById('todoOption')
  const optionPlaceholder = document.getElementById('listPlaceholder')

  // let todoLength = todos.length;
  let listValues = todos.map(({ list }) => list);
  listValues = [...new Set(listValues)];

  todoOption.innerHTML = '';
  for (let i = 0; i < listValues.length; i++) {
    const todoList = document.createElement('option');
    todoList.setAttribute('value', listValues[i]);
    todoList.textContent = listValues[i];
    if (listValues[i] === selectedList) {
      todoList.setAttribute('selected', 'selected');
    }
    todoOption.appendChild(todoList);
  }
  todoOption.appendChild(optionPlaceholder);

}
