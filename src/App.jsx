import React, { useContext, useState } from 'react'
import TodoCounter from '@components/TodoCounter';
import TodoSearch from '@components/TodoSearch';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import CreateTodoButton from '@components/CreateTodoButton';
import { TodoContext } from '@context/TodoContext';
import Modal from "@containers/Modal";
import TodosLoading from "@components/TodosLoading";
import '@styles/global.css';

function App() {
  const {
    todos,
    totalTodos,
    completedTodos,
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
    setTodoValue,
    isEditingTodo,
    setIsEditingTodo,
    todoEditValue,
    setTodoEditValue,
    saveTodos
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
          {loading && new Array(4).fill().map((number) => <TodosLoading key={number} />)}
          {!loading && !filteredTodos.length && <p className='initial-message'>Crea tu primer todo!!!</p>}
          {filteredTodos.map((todo, index) => <TodoItem key={index} setTodoEditValue={setTodoEditValue} setIsEditingTodo={setIsEditingTodo} setModalIsOpen={setModalIsOpen} todoValue={todoValue} setTodoValue={setTodoValue} toggleCompleteTodo={toggleCompleteTodo} deleteTodo={deleteTodo} {...todo}/>)}
        </TodoList>
        {modalIsOpen && <Modal saveTodos={saveTodos} setTodoEditValue={setTodoEditValue} todoEditValue={todoEditValue} setIsEditingTodo={setIsEditingTodo} isEditingTodo={isEditingTodo} todos={todos} addTodo={addTodo} todoValue={todoValue} setTodoValue={setTodoValue} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
        {!loading && <CreateTodoButton setModalIsOpen={setModalIsOpen}/>}
    </div>
  );
}

export default App;