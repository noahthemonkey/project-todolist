import { updateList } from "./newTodo";
import { getTodos, addTodo, todo, todos } from "./todoData";
import { todoFactory } from "./todoFactory";
export let selectedList = "All Current Todos"

export const loadList = function () {
    setSelect(this)

    selectedList = this.textContent.replace("Delete", "");
    todoContainer.innerHTML = "";

    if (selectedList === "All Todos") {
        todos.forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.dueDate,
                todo.priority,
                todo.list,
                todo.checked
            );
        });
    } else if (selectedList === "Done Todos") {
        const doneTodos = todos.filter(todo => todo.checked === true);
        if (doneTodos.length >= 2) {
            console.log(doneTodos[1]); // logs the second done todo
        } else {
            console.log("There is no second done todo");
        }
        console.log(doneTodos)
        doneTodos.forEach(todo => {
            todoFactory(
                doneTodos.title,
                doneTodos.description,
                doneTodos.notes,
                doneTodos.dueDate,
                doneTodos.priority,
                doneTodos.list,
                doneTodos.checked
            );
        });
    } else if (selectedList) {
        getTodos(selectedList).forEach(todo => {
            todoFactory(
                todo.title,
                todo.description,
                todo.notes,
                todo.dueDate,
                todo.priority,
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
