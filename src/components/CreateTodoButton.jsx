import React from 'react';
import '@styles/CreateTodoButton.css';

function CreateTodoButton({ setModalIsOpen }) {
  const onClickButton = () => {
    setModalIsOpen(true);
  }

  return (
    <div className='button-container'>
      <button className='add-todos' onClick={onClickButton}>+</button>
    </div>
  );
}

export default CreateTodoButton;