import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const { items: todos, saveItems: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

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
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      loading,
      error,
      handleCompleteTodo,
      handleDeleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }

