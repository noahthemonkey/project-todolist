import {todoFactory} from './todoFactory.js'


export const newTodo = () => {
    const newBtn = document.createElement('button')
    newBtn.setAttribute('id', 'newTodo')
    newBtn.addEventListener('click', createTodo)

    content.appendChild(newBtn)

    function createTodo() {
        console.log('nice!')
    }
}

