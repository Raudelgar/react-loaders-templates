import React from "react";

import "./square.scss";

/**
 * Default spinner 4 square
 */
export default function SquareSpiinner({ num }) {
  const generateSpinners = num => {
    return Array.from({ length: num }).map((val, index) => (
      <div key={index} className="square" />
    ));
  };
  return (
    <div className="scaling-squares-spinner loader">
      {generateSpinners(num)}
    </div>
  );
}
