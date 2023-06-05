import { factory } from "./domfactory";
import { todoData, todos, addTodo, getTodos, allLists } from "./todoData";
import { showNotes } from './showNotes.js'
import { todoFactory } from './todoFactory.js'
import { listNav } from "./listNav";
import { currentSelected, loadList, selectedList, setSelect } from "./loadList";
import { compareAsc, format } from 'date-fns'

export const newTodo = () => {
  const inputContainer = factory('div', { id: 'inputContainer' })
  const inputTitle = factory('h1', { id: 'inputTitle' })
  inputTitle.textContent = 'Create a new todo'
  const todoTitle = factory('input', { id: 'todoTitle', type: 'text', placeholder: 'Title' })
  const todoDescription = factory('input', { id: 'todoDecription', type: 'text', placeholder: 'Description' })
  const todoNotes = factory('input', { id: 'todoNotes', type: 'text', placeholder: 'Notes' })
  const todoPriority = factory('input', { id: 'todoPriority', type: 'text', placeholder: 'Priority' })
  // const todoDue = factory('input', { id: 'todoDue', type: 'date', placeholder: 'Due Date' })
  const todoDue = factory('input', { id: 'todoDue', type: 'date', placeholder: 'Due Date' })
  const todoDuedate = format(new Date(), 'yyyy-MM-dd')
  const newBtn = factory('button', { id: 'newTodo', value: 'New Todo' })
  newBtn.addEventListener('click', createTodo)
  newBtn.textContent = 'Create Todo'

//   const todoOption = factory('select', { id: 'todoOption', placeholder: 'Current Selected List', value: selectedList })
//   const optionPlaceholder = factory('option', { id: 'listPlaceholder', value: selectedList, selected: true })
//   optionPlaceholder.textContent = '-- Current list selected -- '
//   todoOption.appendChild(optionPlaceholder);

// todoOption.addEventListener('change', () => {
//   selectedList = todoOption.value;
// });







  const listContainer = document.getElementById('lists')

  inputContainer.append(inputTitle, todoTitle, todoDescription, todoNotes, todoDue, todoPriority, newBtn);
  listContainer.appendChild(inputContainer)




  

function createTodo() {
  console.log(inputContainer.children)
  addTodo(
    todoTitle.value,
    todoDescription.value,
    todoDue.value,
    todoPriority.value,
    todoNotes.value,
    selectedList
  )

  const loadTodo = todoFactory(
    todoTitle.value,
    todoDescription.value,
    todoNotes.value,
    todoDue.value,
    todoPriority.value,
    selectedList
  )


  // Clear input fields
  console.log('Before clearing input fields:', inputContainer.children);
  for (let i = 1; i < inputContainer.children.length; i++) {
    inputContainer.children[i].value = '';
  }
  console.log('After clearing input fields:', inputContainer.children);
  updateList()
  loadList(selectedList)
}


  console.log(todos)


};


export const updateList = () => {



}



