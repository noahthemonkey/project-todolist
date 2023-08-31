import { factory } from "./domfactory";
import { todos } from "./todoData";
import { loadList } from "./loadList";

export const sortingFunc = () => {
    
    const bodyContainer = document.getElementById('bodyContainer')
    const sortDiv = document.getElementById('sortDiv')

    const sortHighButton = document.createElement('button')
    sortHighButton.textContent = 'Sort High to Low'
    const sortLowButton =  document.createElement('button')
    sortLowButton.textContent = 'Sort Low to High'

    sortDiv.append(sortHighButton, sortLowButton)

    const priorityMapping = { 'low': 1, 'medium': 2, 'high': 3 };

    sortHighButton.addEventListener('click', () => {
        todos.sort((a, b) => priorityMapping[b.priority] - priorityMapping[a.priority]);
        loadList();
    });

    sortLowButton.addEventListener('click', () => {
        todos.sort((a, b) => priorityMapping[a.priority] - priorityMapping[b.priority]);
        loadList();
    });
}

sortingFunc()