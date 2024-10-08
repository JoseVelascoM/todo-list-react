import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='todo-item'>
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`todo-item-p ${completed ? 'todo-item-p--complete' : ''}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
