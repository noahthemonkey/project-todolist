import {factory} from './domfactory.js'

export const todoFactory = (title, description, notes, dueDate, priority) => {
    // const todoStart = factory('div', {class:'todoStart'}, 'Todolist 1')
    const todoDiv = factory('div', {id: `${title}`})
    const todoTitle = factory('h1', {id: `todoTitle_${title}`, contentEditable: 'true'}, `${title}`)
    const todoDescription = factory('p', {class: 'description', contentEditable: 'true'}, `${description}`)
    const todoNotes = factory('p', {class: `notes`, contentEditable: 'true'}, `${notes}`)
    const tododueDate = factory('p', {class: `dueDate`, contentEditable: 'true'}, `${dueDate}`)
    const todoPriority = factory('p', {class: `priority`, contentEditable: 'true'}, `${priority}`)

todoDiv.append(todoTitle, todoDescription, todoNotes, tododueDate, todoPriority)
todoContainer.appendChild(todoDiv)
}