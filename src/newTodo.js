import { factory } from "./domfactory";
import { todoData, todos, addTodo, getTodos, allLists } from "./todoData";
import { showNotes } from './showNotes.js'
import { todoFactory } from './todoFactory.js'
import { listNav } from "./listNav";
import { currentSelected, loadList, selectedList, setSelect } from "./loadList";

export const newTodo = () => {
  const inputContainer = factory('div', { id: 'inputContainer' })
  const inputTitle = factory('h1', { id: 'inputTitle' })
  inputTitle.textContent = 'Create a new todo'
  const todoTitle = factory('input', { id: 'todoTitle', type: 'text', placeholder: 'Title' })
  const todoDescription = factory('input', { id: 'todoDecription', type: 'text', placeholder: 'Description' })
  const todoNotes = factory('input', { id: 'todoNotes', type: 'text', placeholder: 'Notes' })
  const todoPriority = factory('input', { id: 'todoPriority', type: 'text', placeholder: 'Priority' })
  const todoDue = factory('input', { id: 'todoDue', type: 'text', placeholder: 'Due Date' })
  const newBtn = factory('button', { id: 'newTodo', value: 'New Todo' })
  newBtn.addEventListener('click', createTodo)

//   const todoOption = factory('select', { id: 'todoOption', placeholder: 'Current Selected List', value: selectedList })
//   const optionPlaceholder = factory('option', { id: 'listPlaceholder', value: selectedList, selected: true })
//   optionPlaceholder.textContent = '-- Current list selected -- '
//   todoOption.appendChild(optionPlaceholder);

// todoOption.addEventListener('change', () => {
//   selectedList = todoOption.value;
// });







  const listContainer = document.getElementById('lists')

  inputContainer.append(inputTitle, todoTitle, todoDescription, todoNotes, todoDue, newBtn);
  listContainer.appendChild(inputContainer)





  function createTodo() {
    console.log(todos)

  addTodo(todoTitle.value, todoDescription.value, todoNotes.value, todoDue.value, todoPriority.value, selectedList);
  const loadTodo = todoFactory(todoTitle.value, todoDescription.value, todoNotes.value, todoDue.value, todoPriority.value, selectedList);
  loadList(selectedList)


    let listValues = todos.map(({ list }) => list)
    for (let i = 0; i < 5; i++) {
      inputContainer.children.item(i).value = '';



    }
    updateList()
    loadList(selectedList)

  }
  console.log(todos)


};


export const updateList = () => {



}



