import React, { useState, useEffect, useRef } from "react";

import "./home.scss";
// import { SemipolarSpinner } from "react-epic-spinners";
import FlowerSpinner from "./FlowerSpinner.js";
import AtomSpinner from "./AtomSpinner.js";
import SquareSpinner from "./SquareSpinner.js";
import SemipolarSpinner from "./SemipolarSpinner.js";

export default function Home() {
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
      case "polar":
        loaderRef.current = <SemipolarSpinner />;
        break;
      default:
        break;
    }
  };

  return (
    <div className={`main ${isLoading ? "non-click" : ""}`}>
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
        <button className="btn" onClick={() => fireLoaders("polar")}>
          Semi-Polar
        </button>
      </div>
      {isLoading && loaderRef.current}
    </div>
  );
}
