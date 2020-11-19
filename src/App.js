import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "bryd-list.items";

export default function App() {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    const name = itemNameRef.current.value;
    if (name === "") return;
    setItems((prevItems) => {
      return [...prevItems, { id: uuidv4(), name: name, complete: false }];
    });
    itemNameRef.current.value = null;
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const toggleItems = (id) => {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === id);
    item.complete = !item.complete;
    setItems(newItems);
  };

  const handleClearItems = () => {
    const newItems = items.filter((item) => !item.complete);
    setItems(newItems);
  };

  return (
    <div>
      <NavBar />
        <form className="input">
          <TodoList items={items} toggleItems={toggleItems} />
          <input
            ref={itemNameRef}
            onChange={onInputChange}
            type="text"
            className="input-box"
            placeholder="Add items..."
            value={term}
          ></input>
          <div className="buttons">
            <button onClick={(e) => handleSubmit(e)} className="button">
              Add to Shopping List
            </button>
            <button className="clear-btn" onClick={handleClearItems}>
              Clear Shopping List
            </button>
          </div>
          <h3 className="items-left">
            {items.filter((item) => !item.complete).length} left to pick up
          </h3>
        </form>
      </div>
  );
}
