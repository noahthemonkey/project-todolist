import { factory } from "./domfactory"
export const newList = () => {
    const newBtn = document.createElement('button')
    newBtn.setAttribute('id', 'newList')
    newBtn.textContent = 'New Todolist'

    content.append(newBtn)    

    function onClick(listName){
        const createList = factory('div', {id: `todoContainer`, class: 'newtodolist'})
        content.append(createList)
        
    }

    newBtn.onclick = onClick
}