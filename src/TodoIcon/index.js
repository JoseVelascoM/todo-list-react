import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  'check': (color) => <CheckSVG className='icon-svg' fill={color} />,
  'delete': (color) => <DeleteSVG className='icon-svg' fill={color} />
};

function TodoIcon({ type, color, onClick }) { 
  return (
    <span className={`icon icon-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon }
