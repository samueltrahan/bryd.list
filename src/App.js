import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TodoList from './components/TodoList/TodoList';

export default function App() {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState(["Ranch", "Salad", "Toilet Paper"]);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setItems(e);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  

  return (
    <div>
      <NavBar />
      <form className="input">
      <TodoList items={items}/>
          <input
            onChange={onInputChange}
            type="text"
            className="input-box"
            placeholder="Add items..."
            value={term}
          ></input>
          <button onClick={(e) => handleSubmit(e)} className="button">Add</button>
          <h3>{items.length} left to pick up</h3>
      </form>
    </div>
  );
}
