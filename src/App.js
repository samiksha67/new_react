import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const ButtonToChangeCount = properties => (
  <button onClick={properties.handleClicking}>{properties.label}</button>
);

export const Counter = () => {
  const [count, setCount] = useState(200);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <div> Number is {count} </div>
        <div>
          <ButtonToChangeCount
            label="Increase count (+)"
            handleClicking={increment}
          />
        </div>
        <div>
          <ButtonToChangeCount
            label="Decrease count (-)"
            handleClicking={decrement}
          />
        </div>
      </div>
    </div>
  );
};
