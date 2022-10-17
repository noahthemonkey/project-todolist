import {factory} from './domfactory.js'

export const todoFactory = (title, description, notes, dueDate, priority) => {
    // const todoStart = factory('div', {class:'todoStart'}, 'Todolist 1')
const todoTitle = factory('div', {id: `todoTitle_${title}`}, `${title}`)
const todoDescription = factory('p', {}, `${description}`)
const todoNotes = factory('p', {class: `${title}_notes`}, `${notes}`)
const tododueDate = factory('p', {class: `${title}_dueDate`}, `${dueDate}`)
const todoPriority = factory('p', {class: `${title}_priority`}, `${priority}`)

todoTitle.append(todoDescription, todoNotes, tododueDate, todoPriority)
todoContainer.appendChild(todoTitle)
}