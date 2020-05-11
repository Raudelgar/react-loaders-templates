import React, { useState, useEffect } from "react";

import "./styles.css";
import Home from "./Home.js";
import { ScalingSquaresSpinner } from "react-epic-spinners";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <ScalingSquaresSpinner color="#000000" size="200" className="loader" />
      ) : (
        <Home />
      )}
    </div>
  );
}
