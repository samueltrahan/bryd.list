import React from 'react';
import './Todo.css';

export default function Todo({item, toggleItems}) {

  const handleItemClick = () => {
    toggleItems(item.id)
  }

  return (
    <div>
      <label className="todo">
        <input className="checkbox" type="checkbox" checked={item.complete} onChange={handleItemClick}></input>
      {item.name}
      </label>
    </div>
  )
}
