import React from 'react';
import '@styles/TodoList.css';
function TodoList({children}) {
  return (
    <section className='todo-list-container'>
      <ul className='list-todos'>
        {children}
      </ul>
    </section>
  );
}

export default TodoList;