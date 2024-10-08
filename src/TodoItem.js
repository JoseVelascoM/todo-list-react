import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='todo-item'>
      <CompleteIcon />
      <p className={`todo-item-p ${completed ? 'todo-item-p--complete' : ''}`}>{text}</p>
      <DeleteIcon />
    </li>
  );
}

export { TodoItem };
