import { updateList } from "./newTodo";
import { getTodos, addTodo, todo, todos } from "./todoData";
import { todoFactory } from "./todoFactory";
export let selectedList = "All Current Todos"

export const loadList = function () {
    setSelect(this)

    selectedList = this.textContent.replace("Delete", "");
    todoContainer.innerHTML = "";

    if (selectedList === "All Current Todos") {
        todos.forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.priority,
                todo.dueDate,
                todo.list,
                todo.checked

            );
        });
    } else if (selectedList === "Completed Todos") {
        todos.filter(todo => todo.checked === true).forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.priority,
                todo.dueDate,
                todo.list,
                todo.checked

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
    console.log(el); // add this line
    if (!el) {
        return;
    }
    let currentSelected = '';
    [...el.parentElement.children].forEach(sib => sib.classList.remove('selected'));
    el.classList.add('selected')
    currentSelected = el.textContent.replace("Delete", "")
    return currentSelected
}
