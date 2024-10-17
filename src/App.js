import React, { useState } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [items, setItems] = useState(parsedItems);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  }

  return [items, saveItems];
}

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

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
