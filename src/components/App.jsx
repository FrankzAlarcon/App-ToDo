import React from 'react'
import TodoCounter from '@components/TodoCounter';
import TodoSearch from '@components/TodoSearch';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import CreateTodoButton from '@components/CreateTodoButton';
import '@styles/global.css';

const todos = [
  {
    text: 'Estudiar', isCompleted: false
  },
  {
    text: 'React', isCompleted: false
  },
  {
    text: 'De nuevo', isCompleted: false
  },
]

function App() {
  return (
    <div className='container'>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => <TodoItem key={index} {...todo}/>)}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;