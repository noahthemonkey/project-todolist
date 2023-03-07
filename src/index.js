import "./style.css"
import { homePage } from './home.js'
import { factory } from './domfactory.js'
import { todoFactory } from './todoFactory.js'
import { newTodo, updateList } from "./newTodo"
import { showNotes } from "./showNotes.js"
import { newList } from "./newList"
import { listNav } from "./listNav"
import { todos } from "./todoData"
import { loadList } from "./loadList"


const content = document.getElementById('content')

const todoContainer = document.getElementById('todoContainer')
homePage()


document.addEventListener("DOMContentLoaded", function() {
    loadList.call(document.querySelector('#AllTodos'))
    updateList()

    });

listNav(todos)
newTodo()




console.log('yo')

