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
  
  const todoPriority = factory('select', { id: 'todoPriority' });
  const highPriority = factory('option', { value: 'high' });
  highPriority.textContent = 'High Priority';
  const mediumPriority = factory('option', { value: 'medium' });
  mediumPriority.textContent = 'Medium Priority';
  const lowPriority = factory('option', { value: 'low' });
  lowPriority.textContent = 'Low Priority';
  todoPriority.append(highPriority, mediumPriority, lowPriority);
  
  const todoDue = factory('input', { id: 'todoDue', type: 'date', placeholder: 'Due Date' })
  const newBtn = factory('button', { id: 'newTodo', value: 'New Todo' })
  newBtn.addEventListener('click', createTodo)
  newBtn.textContent = 'Create Todo'







  const listContainer = document.getElementById('lists')

  inputContainer.append(inputTitle, todoTitle, todoDescription, todoNotes, todoDue, todoPriority, newBtn);
  listContainer.appendChild(inputContainer)




  

  function createTodo() {
    const selectedPriority = todoPriority.options[todoPriority.selectedIndex].value;
    console.log(selectedPriority)
    addTodo(
      todoTitle.value,
      todoDescription.value,
      todoDue.value,
      selectedPriority,
      todoNotes.value,
      selectedList
    )
    
    const loadTodo = todoFactory(
      todoTitle.value,
      todoDescription.value,
      todoNotes.value,
      todoDue.value,
      selectedPriority,
      selectedList
    )
    console.log(todos)
  
    
    // Clear input fields
    for (let i = 1; i < inputContainer.children.length; i++) {
      inputContainer.children[i].value = '';
    }
    updateList()
    loadList(selectedList)
  }




};


export const updateList = () => {



}



