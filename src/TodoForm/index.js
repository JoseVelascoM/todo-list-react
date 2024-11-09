import React from 'react';

import './TodoForm.css';

function TodoForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Escribre tu nuevo TODO</label>
      <textarea placeholder="Dar comida al michi" />
      <div className="TodoForm-buttonContainer">
        <button
          type="reset"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
