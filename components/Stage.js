import React from "react";
import Image from "next/image";
export default function Stage({ stage }) {
  return (
    <div className="middle m-2">
      <p>{stage.name}</p>
      <div
        className="middle card bgNone"
        style={{
          height: "8rem",
          width: "8rem",
          borderRadius: "0",
        }}
      >
        <Image
          layout="fill"
          src={stage.img}
          className="card-img"
          alt={stage.alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}
