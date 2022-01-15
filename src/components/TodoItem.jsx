import React from 'react';
import checked from '@images/checked.png';
import edit from '@images/edit.png';
import remove from '@images/remove.png';
import unchecked from '@images/unchecked.png';
import '@styles/TodoItem.css';

function TodoItem({text, isCompleted, toggleCompleteTodo, deleteTodo}) {
  const onComplete = () => {
    toggleCompleteTodo(text)
  }
  const onDelete = () => {
    deleteTodo(text);
  }
  return (
    <li className='todo-item-container'>
      <img
        className='todo-unchecked-image'
        src={isCompleted ? checked:unchecked}
        onClick={onComplete}
        alt='Check or uncheck a todo'/>
      <p className={isCompleted ? 'todo-checked-text':'todo-unchecked-text'} >{text}</p>
      <div>
        <img className='todo-edit-image' src={edit} alt='Edit a todo'/>
        <img
          className='todo-remove-image'
          src={remove}
          onClick={onDelete}
          alt='Remove a todo'/>
      </div>
    </li>
  );
}

export default TodoItem;