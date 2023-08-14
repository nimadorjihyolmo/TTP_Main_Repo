// Your code here!
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// <!--import './style.css';

function Counter() {
  const [count, setCount] = useState(0);

  function increment () {
    setCount(count + 1);
  }

    return (
      <div id="container">
        <div id="navbar">Counter.js</div>
        <div id="counter">
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    );
  }


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Counter />);