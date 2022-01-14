import React from 'react';
import checked from '@images/checked.png';
import edit from '@images/edit.png';
import remove from '@images/remove.png';
import unchecked from '@images/unchecked.png';
import '@styles/TodoItem.css';

function TodoItem({text}) {
  return (
    <li className='todo-item-container'>
      <img className='todo-unchecked-image' src={unchecked} alt='Check or uncheck a todo'/>
      <p>{text}</p>
      <div>
        <img className='todo-edit-image' src={edit} alt='Edit a todo'/>
        <img className='todo-remove-image' src={remove} alt='Remove a todo'/>
      </div>
    </li>
  );
}

export default TodoItem;