import React from 'react'

export default function Todo({item}) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={item.complete}></input>
      {item.name}
      </label>
    </div>
  )
}
