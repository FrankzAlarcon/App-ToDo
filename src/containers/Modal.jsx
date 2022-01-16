import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '@styles/Modal.css';

function Modal({saveTodos, todoEditValue, setIsEditingTodo, isEditingTodo, todos, todoValue, setTodoValue, addTodo, modalIsOpen, setModalIsOpen}) {
  const [isTodoRepeated, setIsTodoRepeated] = useState(false);
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  let clickInSubcontainer =false;
  const onAddTodo = () => {
    if (todoValue ){
      const newTodos = todos.filter(todo => todo.text !== todoEditValue);
      saveTodos(newTodos);
      const todoRepeated = newTodos.findIndex(todo => todo.text.toLowerCase() === todoValue.toLowerCase());
      if(todoRepeated === -1){
        addTodo(todoValue);
        setModalIsOpen(false);
        setIsTodoRepeated(false);
        setIsEditingTodo(false);
      } else {
        setIsTodoRepeated(true);
        setTimeout(()=>{
          setIsTodoRepeated(false);
        }, 2000);        
      }
    } else {
      setIsTodoEmpty(true);
      setTimeout(()=>{
        setIsTodoEmpty(false);
      }, 2000);
    }
  }
  const onCancelTodo = () => {
    setModalIsOpen(false);
    setIsEditingTodo(false);
  }
  const onCloseModal = () => {
    setModalIsOpen(false);
    setIsEditingTodo(false);
  }
  return ReactDOM.createPortal(
    <div className={modalIsOpen ? 'modal-container': 'd-none'} onClick={() => clickInSubcontainer ? clickInSubcontainer=false:onCloseModal()}>
      <div className='modal-subcontainer' onClick={() => clickInSubcontainer = true}>
      <p className='modal-text'>{isEditingTodo ? 'Edita tu TODO':'Escribe tu nuevo TODO'}</p>
        <textarea className='modal-textarea' placeholder='Escribe aquí' value={isEditingTodo ? todoValue:undefined} onInput={(event) => setTodoValue(event.target.value.trim())}/>
        {isTodoRepeated && <p className='warning-message repeated'>Ya existe este TODO</p>}
        {isTodoEmpty && <p className='warning-message empty'>Escribe tu TODO</p>}
        <div className='modal-buttons-container'>
          <button className='modal-button' onClick={onCancelTodo}>Cancelar</button>
          <button className='modal-button' onClick={onAddTodo}>{isEditingTodo ? 'Guardar':'Añadir'}</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;