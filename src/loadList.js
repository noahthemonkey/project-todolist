import { updateList } from "./newTodo";
import { getTodos, addTodo, todo, todos } from "./todoData";
import { sortingFunc } from "./todoPriority";
import { todoFactory } from "./todoFactory";

export let selectedList = "All Todos"

export const loadList = function () {
    todoContainer.style.opacity = 0;
    todoContainer.classList.remove('fade-in');
    todoContainer.style.transition = "none";



    setSelect(this)

    const selectedListItem = document.querySelector(".selected");
    if (selectedListItem) {
        selectedList = selectedListItem.textContent.replace("Delete", "").trim();
    } else {
        selectedList = "All Todos";
    }
    console.log(selectedList)

    // Add CSS styles using template literals

    todoContainer.innerHTML = "";

    if (selectedList === "All Todos") {
        console.table(todos)
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
        console.log(doneTodos)

        doneTodos.forEach(todo => {
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

    // Add a delay before applying the fade-in effect
    setTimeout(() => {
        todoContainer.style.transition = "opacity 0.15s ease-in";
        todoContainer.style.opacity = 1;
    }, 100);
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