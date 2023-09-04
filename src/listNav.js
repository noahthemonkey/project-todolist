import { getTodos, todos, addTodo, getAllLists, deleteList, addList } from "./todoData.js";
import { factory } from "./domfactory";
import { todoFactory } from "./todoFactory"
import { loadList, selectedList, setSelect, } from "./loadList.js";
import { updateList } from "./newTodo.js";


export const listNav = (todos) => {
    const todoContainer = document.getElementById("todoContainer");
    const lists = document.getElementById("lists");

    const listsTitle = factory('h1', { id: 'listsTitle' })
    listsTitle.textContent = 'Create a new list'
    const listsContainer = document.createElement("ul");


    const allTodos = factory("li", { id: 'AllTodos' });
    allTodos.textContent = "All Todos";

    const completedTodos = factory("li", { id: 'CompletedTodos' });
    completedTodos.textContent = "Done Todos";
    completedTodos.onclick = loadList

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

    addListForm.append(listsTitle, inputField, submitBtn);
    lists.append(listsContainer, addListForm,);

    // Inside your "submitBtn" event listener
    submitBtn.addEventListener("click", event => {
        event.preventDefault();
        if (!inputField.value) return;

        const newListName = inputField.value;

        // Check if the list name already exists
        if (!savedLists.includes(newListName)) {
            addList(newListName); // Add the new list to your lists array

            const newList = factory("li", {});
            newList.textContent = newListName;
            addDeleteButton(newList);
            newList.onclick = loadList;
            listsContainer.append(newList);

            inputField.value = "";
            updateList();
        } else {
            // Handle the case where the list name already exists
            // You can show an error message or take appropriate action
            console.log("List name already exists!");
        }
    });


    // Clear the listsContainer
    listsContainer.innerHTML = '';


    const savedLists = getAllLists();
    savedLists.forEach(listName => {
        const listItem = factory("li", {});
        listItem.textContent = listName;
        addDeleteButton(listItem);
        listItem.onclick = loadList;
        listsContainer.append(listItem);
    });



    function addDeleteButton(listItem) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "";
        listItem.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            const listName = listItem.textContent;
            const todosFound = todos.filter(todo => todo.list === listName);

            todosFound.forEach(todo => {
                const index = todos.indexOf(todo);
                todos.splice(index, 1);
            });

            listItem.parentNode.removeChild(listItem);
            updateList();

            // Remove the list from your lists array and localStorage
            deleteList(listName);

            loadList.call(document.querySelector('#AllTodos'));
        });
    }
    const listsh1 = document.createElement('h1')
    listsh1.setAttribute('ID', 'listsh1')
    listsh1.textContent = 'Active Todo Lists'

    lists.appendChild(listsh1)
    listsContainer.append(allTodos, completedTodos)
    listsContainer.classList.add("lists-container");

};
