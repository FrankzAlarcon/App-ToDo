import React from 'react'

function TodoHeader ({loading, children }) {
  return (
    <header style={loading ? {opacity: .35}: null}>
      { children }
    </header>
  );
}

export default TodoHeader;