import { todos } from "./todoData.js";
import { factory } from "./domfactory";

export const list = (todos) => {
    const todoContainer = document.getElementById("todoContainer");
    const lists = document.getElementById("lists");
    const listsContainer = document.createElement("ul");

    const allTodos = factory("li", {});
    allTodos.textContent = "All Current Todos";
    addDeleteButton(allTodos);

    const listsMap = todos.reduce((listsMap, todo) => {
        if (!listsMap[todo.list]) {
            listsMap[todo.list] = [];
        }
        listsMap[todo.list].push(todo);
        return listsMap;
    }, {});

    Object.keys(listsMap).forEach(listName => {
        const listItem = factory("li", {});
        listItem.textContent = listName;
        addDeleteButton(listItem);
        listsContainer.append(listItem);
    });

    const loadList = function () {
        const selectedList = this.textContent;
        todoContainer.innerHTML = "";
        if (selectedList === "All Current Todos") {
            // Get all the todos and display them
        } else {
            // Filter the todos to display only the ones that belong to the selected todolist
        }
    };

    allTodos.onclick = loadList;
    const listItems = Array.from(listsContainer.querySelectorAll("li"));
    listItems.forEach(listItem => {
        listItem.onclick = loadList;
    });


    const addListForm = document.createElement("form");
    addListForm.classList.add("add-list-form");

    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter list name");
    inputField.classList.add("list-input");
    inputField.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Create List";
    submitBtn.classList.add("create-list-btn");

    addListForm.append(inputField, submitBtn);
    lists.append(listsContainer, addListForm, listsContainer);

    submitBtn.addEventListener("click", event => {
        event.preventDefault();
        if (!inputField.value) return;

        const newList = factory("li", {});
        newList.textContent = inputField.value;
        addDeleteButton(newList);
        newList.onclick = loadList;
        listsContainer.append(newList);
        inputField.value = "";
    });

    function addDeleteButton(listItem) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        listItem.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
    }
};
