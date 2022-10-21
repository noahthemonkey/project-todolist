import {todoFactory} from './todoFactory.js'


export const newTodo = () => { 
    const inputContainer = document.createElement('div')
    inputContainer.setAttribute('id', 'inputContainer')
    content.appendChild(inputContainer)
    const todoTitle = document.createElement('input')
    todoTitle.setAttribute('id', 'todoTitle')
    todoTitle.setAttribute('type', 'text')
    todoTitle.setAttribute('placeholder', 'title')

    inputContainer.appendChild(todoTitle)
    const todoDescription = document.createElement('input')
    todoDescription.setAttribute('id', 'todoDescription')
    todoDescription.setAttribute('type', 'text')
    todoDescription.setAttribute('placeholder', 'Description')
    inputContainer.appendChild(todoDescription)
    const todoNotes = document.createElement('input')
    todoNotes.setAttribute('id', 'todoNotes')
    todoNotes.setAttribute('type', 'text')
    todoNotes.setAttribute('placeholder', 'Notes')
    inputContainer.appendChild(todoNotes)
    const todoPriority = document.createElement('input')
    todoPriority.setAttribute('id', 'todoPriority')
    todoPriority.setAttribute('type', 'text')
    todoPriority.setAttribute('placeholder', 'Priority')
    inputContainer.appendChild(todoPriority)
    const todoDue = document.createElement('input')
    todoDue.setAttribute('id', 'todoDue')
    todoDue.setAttribute('type', 'text')
    todoDue.setAttribute('placeholder', 'Due Date')
    inputContainer.appendChild(todoDue)
    const newBtn = document.createElement('button')
    newBtn.setAttribute('id', 'newTodo')
    newBtn.addEventListener('click', createTodo)

    inputContainer.appendChild(newBtn)

    function createTodo() {
        
        const creatingTodo = todoFactory(todoTitle.value, todoDescription.value, todoNotes.value, todoDue.value, todoPriority.value)

        
        for(let i = 0;i < 5; i++){
            inputContainer.children.item(i).value = ''

        }
        

    }
}

