import React, { useState, useEffect } from "react";

import "./styles.scss";
import Home from "./Home.js";
import SquareSpinner from "./SquareSpinner.js";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoading]);

  const loadSquares = () => setLoading(true);

  return (
    <div className="App">
      {isLoading ? (
        <SquareSpinner num={4} />
      ) : (
        <Home loadSquares={loadSquares} />
      )}
    </div>
  );
}
