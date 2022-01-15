import React, { useContext } from 'react';
import '@styles/TodoSearch.css';
import { TodoContext } from '@context/TodoContext'

function TodoSearch() {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <input
      className='input-search'
      placeholder='Busca un TODO'
      onInput={onSearchValueChange}
    />
  );
}

export default TodoSearch;