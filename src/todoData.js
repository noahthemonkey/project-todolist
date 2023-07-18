import { listNav } from "./listNav";

export const todos = [
  {
    id: 1,
    title: "Buy Groceries",
    description: "Go to the supermarket to buy food for the week",
    notes: "Remember to get eggs, milk, bread, and vegetables",
    priority: "high",
    dueDate: "2024-05-03",
    list: "General",
    checked: true
  },
  {
    id: 5,
    title: "Buy banana",
    description: "Go to the supermarket to buy food for the week",
    notes: "Remember to get eggs, milk, bread, and vegetables",
    priority: "medium",
    dueDate: "2023-05-10",
    list: "General",
    checked: false
  },
  {
    id: 2,
    title: "Finish Project Report",
    description: "Write a detailed report on the recent project",
    notes: "Make sure to include all the key findings and recommendations",
    priority: "high",
    dueDate: "2023-04-24",
    list: "Work",
    checked: false
  },
  {
    id: 3,
    title: "Book Dentist Appointment",
    description: "Call the dentist office to schedule a check-up appointment",
    notes: "Check the availability for the earliest appointment",
    priority: "low",
    dueDate: "2023-09-04",
    list: "Health",
    checked: false
  },
  {
    id: 4,
    title: "Pay Rent",
    description: "Transfer the rent payment for the month to the landlord",
    notes: "Do not forget to save a receipt of the transaction",
    priority: "high",
    dueDate: "2023-02-20",
    list: "Finance",
    checked: false
  }
];



export const getTodos = (listName) => {
  return todos.filter((todo) => todo.list === listName);
};


export const addTodo = (title, description, notes, priority, dueDate, list) => {
  todos.push({
    id: todos.length + 1,
    title,
    description,
    notes,
    priority,
    dueDate,
    list
  });
};

export const allLists = () => {
  let currentLists = []
  let listValues = todos.map(({ list }) => list);
  listValues = [...new Set(listValues)];
  currentLists.push(listValues)
  console.log(currentLists)
  return currentLists;
}
