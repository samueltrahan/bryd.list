import React from 'react'

export default function Todo({item, toggleItems}) {

  const handleItemClick = () => {
    toggleItems(item.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={item.complete} onChange={handleItemClick}></input>
      {item.name}
      </label>
    </div>
  )
}
