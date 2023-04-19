import { getTodos, todos, addTodo, getAllLists } from "./todoData.js";
import { factory } from "./domfactory";
import { todoFactory } from "./todoFactory"
import { loadList, selectedList, setSelect, } from "./loadList.js";
import { updateList } from "./newTodo.js";

export const listNav = (todos) => {
    const todoContainer = document.getElementById("todoContainer");
    const lists = document.getElementById("lists");

    const listsTitle = factory('h1', { id: 'listsTitle' })
    listsTitle.textContent = 'Create a new todolist'
    const listsContainer = document.createElement("ul");


    const allTodos = factory("li", { id: 'AllTodos' });
    allTodos.textContent = "All Current Todos";

    const completedTodos = factory("li", { id: 'CompletedTodos' });
    completedTodos.textContent = "Completed Todos";
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
    lists.append(listsContainer, addListForm, );
    
    submitBtn.addEventListener("click", event => {
        event.preventDefault();
        if (!inputField.value) return;
        
        const newList = factory("li", {});
        newList.textContent = inputField.value;
        addDeleteButton(newList);
                newList.onclick = loadList;

        listsContainer.append(newList);
        console.log(newList.textContent)
        
        inputField.value = "";
        updateList()

    });

    function addDeleteButton(listItem) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "";
        listItem.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            const listName = listItem.textContent.replace('Delete', '');
            console.log(listName)
            const todosFound = todos.filter(todoListNames => todoListNames.list == listName);

            todosFound.forEach(todo => {
                const index = todos.indexOf(todo);
                todos.splice(index, 1);
              });
              console.log(listItem)
              listItem.parentNode.removeChild(listItem)
              loadList.call(document.querySelector('#AllTodos'))
            console.log(todosFound)
            updateList();
        });
    }

    listsContainer.append(allTodos, completedTodos)
    listsContainer.classList.add("lists-container");

};
