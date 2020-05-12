import React, { useState, useEffect, useRef } from "react";

import "./home.scss";
// import { AtomSpinner } from "react-epic-spinners";
import AtomSpinner from "./AtomSpinner.js";

export default function Home({ loadSquares }) {
  const [isLoading, setLoading] = useState(false);
  const loaderRef = useRef("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [isLoading]);

  const fireLoaders = id => {
    setLoading(true);
    switch (id) {
      case "atom":
        loaderRef.current = <AtomSpinner />;
        break;
      default:
        break;
    }
  };

  if (isLoading) {
    return loaderRef.current;
  }

  return (
    <div className="main">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="btn-group">
        <button className="btn" onClick={loadSquares}>
          Squares
        </button>
        <button className="btn" onClick={() => fireLoaders("atom")}>
          Atom
        </button>
      </div>
    </div>
  );
}
