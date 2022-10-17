import React, { useState } from 'react'
import TodoForm from "./TodoForm";
import Todo from './Todo';

function TodoList () {
    const [todos, setTodos] = useState([])
// passing in an empty array

const addTodo = todo => {
  //???? allows us to add a todo avoid multiple spaces - uncertain about this code????
  if (!todo.text || /^\s*$/.test(todo.text)) {
    return
  }

  const newTodos =  [todo, ...todos]
  setTodos(newTodos)
  // console.log(todo, ...todos)
};


// create the edit function of todos
const updatedTodos= (todoId, newValue) => {
 //???? allows us to add a todo avoid multiple spaces - uncertain about this code????
 if (!newValue.text || /^\s*$/.test(newValue.text)) {
  return;
}
// if statement if Item Id is equal to todoID then put newValue and if not 
setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

// create a function to remove todos
const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id)
// check the array for the todo and remove from list
  setTodos(removeArr);
};

// create a function for Complete todo  || 
const completeTodos = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      // toggle between true and false
      todo.isComplete = !todo.isComplete
    }
    return todo;
  });
  setTodos(updatedTodos);
}
  return (
    <div>
        <h1> What's the Plan for today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos ={todos} 
        completeTodos={completeTodos}
        removeTodo={removeTodo}
        updatedTodos={updatedTodos}
          />
    </div>
  )
}

export default TodoList