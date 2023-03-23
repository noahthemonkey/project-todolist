import {factory} from './domfactory.js'
import { showNotes } from './showNotes.js'
import { todos } from './todoData.js'

export const todoFactory = (title, description = '', notes = '', dueDate = '', priority = '', list = '') => {
    const todoContainer = document.getElementById('todoContainer')
    const todoDiv = factory('div', {id: `${title}`, class: 'collapsible'})
    const todoTitle = factory('h1', {id: `todoTitle_${title}`, contentEditable: 'true'}, `${title}`)
    const todoDescription = factory('p', {class: 'description', contentEditable: 'true'}, `${description}`)
    const todoNotes = factory('p', {class: `notes`, contentEditable: 'true'}, `${notes}`)
    const tododueDate = factory('p', {class: `dueDate`, contentEditable: 'true'}, `${dueDate}`)
    const todoPriority = factory('p', {class: `priority`, contentEditable: 'true'}, `${priority}`)
    const todoChecked = factory('input', {type: 'checkbox'})
    const todoDelete = factory('button', {class: 'delete'})
    const todoShow = factory('button', {class: 'shownotes'})
    const todoList = factory('p', {class: `list`}, `${list}`); 

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

    todoPriority.addEventListener('blur', () => {
        todos[index].priority = todoPriority.textContent
    })
    
   todoList.addEventListener('blur', () => {
        todos[index].list = todoList.textContent
    })

    todoChecked.addEventListener('click', () => {
        const index = todos.findIndex((todo) => todo.title === title)
        if (index !== -1) {
            todos[index].checked = todoChecked.checked
        }
    })

    todoShow.addEventListener('click', showNotes)

    todoDelete.addEventListener('click', () => deleteTodo.bind(todoDiv, todos.id)());

    function deleteTodo(id){
        const index = todos.findIndex((todo) => todo.id === id)
        todos.splice(index, 1)
        this.remove()
        console.log(todos)
    }

    todoChecked.addEventListener('click', todoDone)
    
    function todoDone() {
    const index = todos.findIndex((todo) => todo.title === title)
    if (todoChecked.checked == true) {
        todos[index].checked = true
        console.log(todos)
        
        for(var i = 0;i < 5; i++){
            this.parentNode.children.item(i).style.textDecoration = 'line-through'
                

            this.parentNode.children.item(i).style.color = 'gray'

        }

    }else{
        todos[index].checked = false
        console.log(todos)
        
        for(var i = 0;i < 5; i++){
            this.parentNode.children.item(i).style.textDecoration = 'none'
            this.parentNode.children.item(i).style.color = 'black'

    }
    this.parentNode.children.item(0).style.color = 'red'
    }
}

todoDiv.append(todoTitle, todoDescription, todoNotes, tododueDate, todoPriority, todoChecked, todoDelete, todoShow)
todoContainer.appendChild(todoDiv)

return {title, description, notes, dueDate, priority, list: todoList.textContent};

}
  


