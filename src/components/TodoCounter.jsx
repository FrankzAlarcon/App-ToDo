import React from 'react'
import '@styles/TodoCounter.css';

function TodoCounter ({completedTodos, totalTodos}) {
  return (
    <h2 className='todo-counter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export default TodoCounter;