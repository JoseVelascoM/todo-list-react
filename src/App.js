import React, { useState } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const handleCompleteTodo = (completedTodo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === completedTodo.text);
    newTodos[index].completed = !newTodos[index].completed;

    saveTodos(newTodos);
  }

  const handleDeleteTodo = (deletedTodo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === deletedTodo.text);
    newTodos.splice(index, 1);

    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            completed={todo.completed}
            key={index}
            text={todo.text}
            onComplete={() => handleCompleteTodo(todo)}
            onDelete={() => handleDeleteTodo(todo)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
