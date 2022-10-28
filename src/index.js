import "./style.css"
import {home} from './home.js'
import {factory} from './domfactory.js'
import {todoFactory} from './todoFactory.js'
import { newTodo } from "./newTodo"
import { showNotes } from "./showNotes.js"

const content = document.getElementById('content')
const todoContainer = document.getElementById('todoContainer')



const forToday = todoFactory('Math','Practice for math test','read and do practice questions from page 73 to 89 in the math book', 'today', 'very important')

const nextDay = todoFactory('Moms birthday', 'Get a present', 'maybe get her a new bag and some flowers', '2044/07/22','very important')


newTodo()
showNotes()

console.log('yo')

