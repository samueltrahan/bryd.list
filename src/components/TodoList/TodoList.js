import React from "react";
import "./TodoList.css";
import Todo from "../Todo/Todo";

function TodoList({ items, toggleItems }) {
  let itemLength =
    items.length < 6 ? (
      <div className="todo-list">
        {items.map((item) => (
          <Todo key={item.id} item={item} toggleItems={toggleItems} />
        ))}
      </div>
    ) : (
      <div className="todo-list-six">
        {items.map((item) => (
          <Todo key={item.id} item={item} toggleItems={toggleItems} />
        ))}
      </div>
    );
  return (
    <>
    { itemLength }
    </>
    ) 
}

export default TodoList;
