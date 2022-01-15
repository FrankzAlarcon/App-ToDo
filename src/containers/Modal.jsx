import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '@styles/Modal.css';

function Modal({todos, todoValue, setTodoValue, addTodo, modalIsOpen, setModalIsOpen}) {
  const [isTodoRepeated, setIsTodoRepeated] = useState(false);
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  let clickInSubcontainer =false;
  const onAddTodo = () => {
    if (todoValue ){
      const todoRepeated = todos.findIndex(todo => todo.text.toLowerCase() === todoValue.toLowerCase());
      if(todoRepeated === -1){
        addTodo(todoValue);
        setModalIsOpen(false);
        setIsTodoRepeated(false)
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
  }
  const onCloseModal = () => {
    setModalIsOpen(false);
  }
  
  return ReactDOM.createPortal(
    <div className={modalIsOpen ? 'modal-container': 'd-none'} onClick={() => clickInSubcontainer ? clickInSubcontainer=false:onCloseModal()}>
      <div className='modal-subcontainer' onClick={() => clickInSubcontainer = true}>
      <p className='modal-text'>Escribe tu nuevo TODO</p>
        <textarea className='modal-textarea' placeholder='Escribe aquí' onInput={(event) => setTodoValue(event.target.value)}/>
        {isTodoRepeated && <p className='warning-message repeated'>Ya existe este TODO</p>}
        {isTodoEmpty && <p className='warning-message empty'>Escribe tu TODO</p>}
        <div className='modal-buttons-container'>
          <button className='modal-button' onClick={onCancelTodo}>Cancelar</button>
          <button className='modal-button' onClick={onAddTodo}>Añadir</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;