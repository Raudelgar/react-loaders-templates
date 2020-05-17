import React from "react";

import "./polar.scss";

export default function SemipolarSpinner() {
  const generateRings = () =>
    Array.from({ length: 5 }).map((ring, i) => (
      <div key={i} className="ring" />
    ));

  return (
    <div className="bg-loader">
      <div className="semipolar-spinner loader">{generateRings()}</div>
    </div>
  );
}
