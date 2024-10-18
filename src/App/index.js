import React, { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleCompleteTodo = (completedTodo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text === completedTodo.text
    );
    newTodos[index].completed = !newTodos[index].completed;

    saveTodos(newTodos);
  };

  const handleDeleteTodo = (deletedTodo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === deletedTodo.text);
    newTodos.splice(index, 1);

    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onCompleteTodo={handleCompleteTodo}
      onDeleteTodo={handleDeleteTodo}
    />
  );
}

export default App;
