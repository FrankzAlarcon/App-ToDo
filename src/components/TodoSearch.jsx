import React from 'react';
import '@styles/TodoSearch.css';

function TodoSearch({loading, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <input
      className='input-search'
      placeholder='Busca un TODO'
      onInput={onSearchValueChange}
      disabled={loading}
    />
  );
}

export default TodoSearch;