import React from "react";

export default function Toast({ setNotify, notify }) {
  return (
    <div
      className={`toast ${notify} text-white bgRed`}
    
      role="alert"
      ariaLive="assertive"
      ariaAtomic="true"
      style={{
        top: "10%",
        right: "8px",
        zIndex: 8,
        maxWidth: "250px",
        position: "fixed",
      }}
    >
      <div className={`text-white toast-header bgRed`}>
        <strong className="me-auto">Error</strong>
        <button
          type="button"
          className="btn-close "
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={setNotify}
        ></button>
      </div>
      <div className="toast-body">Oops! something went wrong</div>
    </div>
  );
}
