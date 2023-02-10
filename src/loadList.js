import { updateList } from "./newTodo";
import { getTodos, addTodo, todo, todos } from "./todoData";
import { todoFactory } from "./todoFactory";
export let selectedList = "All Current Todos"

export const loadList = function () {
    setSelect(this)
    selectedList = this.textContent.replace("Delete", "");
    console.log(selectedList)
    todoContainer.innerHTML = "";

    if (selectedList === "All Current Todos") {
        todos.forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.priority,
                todo.dueDate,
                todo.list

            );
        });
    } else if (selectedList) {
        getTodos(selectedList).forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.priority,
                todo.dueDate,
                todo.list

            );

        });
    }
    return selectedList
};



export const setSelect = el => {
    let currentSelected = '';
    [...el.parentElement.children].forEach(sib => sib.classList.remove('selected'));
    el.classList.add('selected')
    currentSelected = el.textContent.replace("Delete", "")
    console.log(currentSelected)
    return currentSelected
}
