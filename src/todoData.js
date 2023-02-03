export const todos = [
    {
      id: 1,
      text: 'Do laundry',
      list: 'General'
    },
    {
      id: 2,
      text: 'Study for exam',
      list: 'School'
    },
    {
      id: 3,
      text: 'Buy groceries',
      list: 'General'
    },
  ];

const todoData = [];

export const addTodo = (todo, listName) => {
  todoData.push({
    todo,
    listName
  });
};

export const getTodos = listName => {
  return todoData.filter(todo => todo.listName === listName);
};

  

  