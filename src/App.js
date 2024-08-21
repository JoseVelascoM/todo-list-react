import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso React', completed: false },
  { text: 'Llorar con la llorola', completed: false },
  { text: 'Acariciar a la michi', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem completed={todo.completed} key={index} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
