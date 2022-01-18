import React from "react";
import TodoCounter from "@components/TodoCounter";
import TodoSearch from "@components/TodoSearch";
import TodoList from "@containers/TodoList";
import TodoItem from "@components/TodoItem";
import CreateTodoButton from "@components/CreateTodoButton";
import Modal from "@containers/Modal";
import TodosLoading from "@components/TodosLoading";
import TodoHeader from "@containers/TodoHeader";
import TodoMessage from "@components/TodoMessage";
import { useTodos } from "@hooks/useTodos";
import ChangeAlertWithStorageListener from "@components/ChangeAlert";
import "@styles/global.css";

function App() {
  const {
    todos, filteredTodos, totalTodos, completedTodos,
    searchValue, setSearchValue,
    error, loading,
    toggleCompleteTodo, addTodo,  deleteTodo,
    modalIsOpen, setModalIsOpen,
    todoValue,setTodoValue,
    isEditingTodo, setIsEditingTodo,
    todoEditValue, setTodoEditValue,
    saveTodos,
  } = useTodos();
  return (
    <div className="container">
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch loading={loading} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList 
        error={error}
        onError={() => <TodoMessage text={'Ha ocurrido un error'}/>}
        loading={loading}
        onLoading={() => new Array(4).fill().map((number, index) => <TodosLoading key={index} />)}
        todos={todos}
        onEmptyTodos={() => <TodoMessage text={'Crea tu primer todo!!!'}/>}
        filteredTodos={filteredTodos}
        onEmptyFilteredTodos={() => <TodoMessage text={`No existen coindicencias para ${searchValue}` }/>}
      >
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            setTodoEditValue={setTodoEditValue}
            setIsEditingTodo={setIsEditingTodo}
            setModalIsOpen={setModalIsOpen}
            todoValue={todoValue}
            setTodoValue={setTodoValue}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
            {...todo}
          />
        ))}
      </TodoList>
      {modalIsOpen && (
        <Modal
          saveTodos={saveTodos}
          setTodoEditValue={setTodoEditValue}
          todoEditValue={todoEditValue}
          setIsEditingTodo={setIsEditingTodo}
          isEditingTodo={isEditingTodo}
          todos={todos}
          addTodo={addTodo}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      {!loading && <CreateTodoButton setModalIsOpen={setModalIsOpen} />}
      <ChangeAlertWithStorageListener />
    </div>
  );
}

export default App;
