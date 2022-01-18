import React from 'react';
import '@styles/TodoList.css';

function TodoList( props ) {
  return (
    <section className='todo-list-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.todos.length && props.onEmptyTodos()}
      {!props.loading && !props.filteredTodos.length &&!!props.todos.length && props.onEmptyFilteredTodos()}
      <ul className='list-todos'>
        {props.children}
        {/* {props.filteredTodos.map(props.render || props.children)} */}
      </ul>
    </section>
  );
}

export default TodoList;