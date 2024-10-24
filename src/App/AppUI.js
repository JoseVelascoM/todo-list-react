import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  loading,
  error,
  onCompleteTodo,
  onDeleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Cargando..</p>}
        {error && <p>¡Ups, hubo un error al cargar los datos!</p>}
        {(!loading && searchedTodos.length === 0) && <p>¡Es hora de crear tu primer TODO!</p>}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            completed={todo.completed}
            key={index}
            text={todo.text}
            onComplete={() => onCompleteTodo(todo)}
            onDelete={() => onDeleteTodo(todo)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
