import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='todo-counter'>
      { total === completed ? (
        <strong>
          ¡Felicidades has completado todas tus tareas!
        </strong>
      ) : (
        <>
          Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOS
        </>
      )
      }
    </h1>
  );
}

export { TodoCounter };
