import React from "react";

export default function Loading() {
  return (
    <div
      className="position-fixed w-100 h-100 middle"
      style={{
        background: "rgba(0, 0, 0, 0.527)",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 8,
      }}
    >
      <div className="lds-hourglass"></div>
    </div>
  );
}
