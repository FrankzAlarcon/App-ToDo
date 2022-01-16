import React, { useState } from 'react'
import useLocalStorage from '@hooks/useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {item: todos,setItem, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoValue, setTodoValue] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [todoEditValue, setTodoEditValue] = useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const addTodo = (text) => {
    const allTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
    saveTodos([{text, isCompleted: false},...allTodos]);
  }
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted; 
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    saveTodos(todos.filter(todo => todo.text !== text))
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      todos,
      totalTodos,
      completedTodos,
      setSearchValue,
      filteredTodos,
      addTodo,
      toggleCompleteTodo,
      deleteTodo,
      modalIsOpen,
      setModalIsOpen,
      todoValue,
      setTodoValue,
      isEditingTodo, 
      setIsEditingTodo,
      todoEditValue,
      setTodoEditValue,
      saveTodos,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export {
  TodoContext,
  TodoProvider
};