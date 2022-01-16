import React from 'react'
import '@styles/TodosLoading.css';
function TodosLoading() {
  return (
    <div className='loading-todo-container'>
      <span className='loading-todo-completeIcon'></span>
      <p className='loading-todo-text'>Cargando...</p>
      <span className='loading-todo-deleteIcon'></span>
    </div>
  );
}

export default TodosLoading;