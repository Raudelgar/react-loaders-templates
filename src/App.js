import React, { useState, useEffect } from "react";

import "./styles.scss";
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
        <ScalingSquaresSpinner size="200" color="#357cb3" className="loader" />
      ) : (
        <Home />
      )}
    </div>
  );
}
