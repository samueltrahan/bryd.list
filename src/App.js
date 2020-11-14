import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "bryd-list.items"

export default function App() {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if(storedItems) setItems(storedItems)
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const handleSubmit = (e) => {
    const name = itemNameRef.current.value;
    if (name === "") return;
    setItems(prevItems => {
      return [...prevItems, {id: uuidv4(), name: name, complete: false}]
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
