import React from "react";

import "./atom.scss";

export default function AtomSpiinner() {
  return (
    <div className="bg-loader">
      <div className="atom-spinner loader">
        <div className="spinner-inner">
          <div className="spinner-line" />
          <div className="spinner-line" />
          <div className="spinner-line" />
          {/* Chrome renders little circles malformed */}
          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
    </div>
  );
}
