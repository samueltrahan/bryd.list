import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [term, setTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  const handleSubmit = (e, item) => {
    console.log(e.target.value);
    e.preventDefault();
    setItems(e.target.value);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const renderItems = () => {
    return items.map((item) => <div>{item}</div>);
  };

  return (
    <div>
      <NavBar />
      <div>{renderItems()}</div>
      <form className="input" onSubmit={handleSubmit}>
          <input
            onChange={onInputChange}
            type="text"
            className="input-box"
            placeholder="Add items..."
            value={term}
          ></input>
          <button className="button">Add</button>
      </form>
    </div>
  );
}
