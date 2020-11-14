import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

function TodoList({items, toggleItems}) {
  return (
    <div className="todo-list">
      {items.map((item) => 
      <Todo key={item.id} item={item} toggleItems={toggleItems} />
      )}
    </div>
  )
}

export default TodoList
