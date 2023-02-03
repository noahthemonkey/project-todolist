import { factory } from "./domfactory"
export const list = () => {
    const todoContainer = document.getElementById('todoContainer')
    const lists = document.getElementById('lists')
    const listsContainer = document.createElement('ul')
    
    
    const allTodos = factory('li', {})
    allTodos.textContent = 'All Current Todos'
    
    const generalTodos = factory('li', {})
    generalTodos.textContent = 'General'
    
    const schoolTodos = factory('li', {})
    schoolTodos.textContent = 'School'
    
    
    


    const loadList = function() {
        console.log(this)
    }
    
    
    allTodos.onclick = loadList
    generalTodos.onclick = loadList
    schoolTodos.onclick = loadList


    listsContainer.append(allTodos, generalTodos, schoolTodos)
    lists.append(listsContainer)

}