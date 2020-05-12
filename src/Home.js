import React, { useState, useEffect, useRef } from "react";

import "./home.scss";
// import { FlowerSpinner } from "react-epic-spinners";
import FlowerSpinner from "./FlowerSpinner.js";
import AtomSpinner from "./AtomSpinner.js";
import SquareSpinner from "./SquareSpinner.js";

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
      case "square":
        loaderRef.current = (
          <div className="bg-loader">
            <SquareSpinner num={4} />
          </div>
        );
        break;
      case "atom":
        loaderRef.current = <AtomSpinner />;
        break;
      case "flower":
        loaderRef.current = <FlowerSpinner />;
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
        <button className="btn" onClick={() => fireLoaders("square")}>
          Squares
        </button>
        <button className="btn" onClick={() => fireLoaders("atom")}>
          Atom
        </button>
        <button className="btn" onClick={() => fireLoaders("flower")}>
          Flower
        </button>
      </div>
    </div>
  );
}
