import {factory} from './domfactory.js'
import { showNotes } from './showNotes.js'

export const todoFactory = (title, description, notes, dueDate, priority) => {
    // const todoStart = factory('div', {class:'todoStart'}, 'Todolist 1')
    const todoDiv = factory('div', {id: `${title}`, class: 'collapsible'})
    const todoTitle = factory('h1', {id: `todoTitle_${title}`, contentEditable: 'true'}, `${title}`)
    const todoDescription = factory('p', {class: 'description', contentEditable: 'true'}, `${description}`)
    const todoNotes = factory('p', {class: `notes`, contentEditable: 'true'}, `${notes}`)
    const tododueDate = factory('p', {class: `dueDate`, contentEditable: 'true'}, `${dueDate}`)
    const todoPriority = factory('p', {class: `priority`, contentEditable: 'true'}, `${priority}`)
    const todoChecked = factory('input', {type: 'checkbox'})
    const todoDelete = factory('button', {class: 'delete'})

    


    todoDelete.addEventListener('click', deleteTodo)

    function deleteTodo(){
       this.parentNode.remove()
    }

    todoChecked.addEventListener('click', todoDone)
    function todoDone() {
    if (todoChecked.checked == true) {
        for(let i = 0;i < 5; i++){
            this.parentNode.children.item(i).style.textDecoration = 'line-through'
            this.parentNode.children.item(i).style.color = 'gray'
        }

    }else{
        
        for(let i = 0;i < 5; i++){
            this.parentNode.children.item(i).style.textDecoration = 'none'
            this.parentNode.children.item(i).style.color = 'black'

    }
    this.parentNode.children.item(0).style.color = 'red'
    }

}

todoDiv.append(todoTitle, todoDescription, todoNotes, tododueDate, todoPriority, todoChecked, todoDelete)
todoContainer.appendChild(todoDiv)


}