import React, { useContext, useState } from 'react'
import TodoCounter from '@components/TodoCounter';
import TodoSearch from '@components/TodoSearch';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import CreateTodoButton from '@components/CreateTodoButton';
import { TodoContext } from '@context/TodoContext';
import Modal from "@containers/Modal"
import '@styles/global.css';

function App() {
  const {
    todos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    error,
    loading,
    filteredTodos,
    toggleCompleteTodo,
    modalIsOpen,
    setModalIsOpen,
    addTodo,
    deleteTodo,
    todoValue,
    setTodoValue
  } = useContext(TodoContext);
  return (
    <div className='container'>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch setSearchValue={setSearchValue}/>
        <TodoList>
          {error && <p>Ha ocurrido un error</p>}
          {loading && <p className='loading'>Cargando ...</p>}
          {!loading && !filteredTodos.length && <p className='initial-message'>Crea tu primer todo!!!</p>}
          {filteredTodos.map((todo, index) => <TodoItem key={index} toggleCompleteTodo={toggleCompleteTodo} deleteTodo={deleteTodo} {...todo}/>)}
        </TodoList>
        {modalIsOpen && <Modal todos={todos} addTodo={addTodo} todoValue={todoValue} setTodoValue={setTodoValue} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
        {!loading && <CreateTodoButton setModalIsOpen={setModalIsOpen}/>}
    </div>
  );
}

export default App;