import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TodoList from "./components/TodoList/TodoList";
import uuid from 'uuid'

export default function App() {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();

  const handleSubmit = (e) => {
    const name = itemNameRef.current.value;
    if (name === "") return;
    setItems(prevItems => {
      return [...prevItems, {id: uuid(), name: name, complete: false}]
    })
    itemNameRef.current.value = null;
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <form className="input">
        <TodoList items={items} />
        <input
          ref={itemNameRef}
          onChange={onInputChange}
          type="text"
          className="input-box"
          placeholder="Add items..."
          value={term}
        ></input>
        <button onClick={(e) => handleSubmit(e)} className="button">
          Add
        </button>
        <h3>{items.length} left to pick up</h3>
      </form>
    </div>
  );
}
