import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='todo-counter'>
      Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOS
    </h1>
  );
}

export { TodoCounter };
