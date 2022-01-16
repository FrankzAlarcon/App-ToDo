import React from 'react';
import '@styles/TodoSearch.css';

function TodoSearch({setSearchValue}) {
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