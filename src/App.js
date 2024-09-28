import React, { useState } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso React', completed: false },
  { text: 'Llorar con la llorola', completed: false },
  { text: 'Acariciar a LA michi', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  console.log(`Busqueda: ${searchValue}`)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem completed={todo.completed} key={index} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
