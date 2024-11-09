import React, { useContext } from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    searchedTodos,
    loading,
    error,
    handleCompleteTodo,
    handleDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  function handleCreateTodoButtonOnClick() {
    setOpenModal(!openModal);
  }

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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

      <CreateTodoButton onClick={handleCreateTodoButtonOnClick} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
