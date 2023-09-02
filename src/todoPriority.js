import { factory } from "./domfactory";
import { todos } from "./todoData";
import { loadList, selectedList } from "./loadList";

const bodyContainer = document.getElementById('bodyContainer');
const sortDiv = document.getElementById('sortDiv');

const sortHighButton = document.createElement('button');
sortHighButton.textContent = 'Sort High to Low';
const sortLowButton =  document.createElement('button');
sortLowButton.textContent = 'Sort Low to High';

sortDiv.append(sortHighButton, sortLowButton);

let sortOrder = 'highToLow'; // Default sort order

export const sortingFunc = () => {
    if (sortOrder === 'highToLow') {
      todos.sort((a, b) => {
        const priorityOrder = ['high', 'medium', 'low'];
        return priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority);
      });
    } else if (sortOrder === 'lowToHigh') {
      todos.sort((b, a) => {
        const priorityOrder = ['low', 'medium', 'high'];
        return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
      });
    }
    console.table(todos);
    console.log(selectedList);
    loadList()
  };

sortHighButton.addEventListener('click', () => {
  sortOrder = 'highToLow';
  sortingFunc();

});

sortLowButton.addEventListener('click', () => {
  sortOrder = 'lowToHigh';
  sortingFunc();

});