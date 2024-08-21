import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='todo-counter'>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
