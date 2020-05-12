import React from "react";

import "./flower.scss";

export default function FlowerSpinner() {
  return (
    <div className="bg-loader">
      <div className="flower-spinner loader">
        <div className="dots-container">
          <div className="bigger-dot">
            <div className="smaller-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}
