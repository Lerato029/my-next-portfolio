import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Bio() {
  return (
    <div className="flexWrap m-2">
      <div
        className="middle card"
        style={{
          height: "21rem",
          width: "21rem",
          borderRadius: "0",
        }}
      >
        <Image
          layout="fill"
          src="/logo.svg"
          className="card-img"
          alt="Lerato mokgwabona"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="middle">
        <p className="pr-2 fs-5 mt-3 maxWidthTxt">
          Hi, my name is Lerato Nyalungu. I am a Full-Stack Designer with a
          background in Architecture which has given me the ability to think
          divergently and how to be a team player and is the foundation of my
          design thinking ability. I am competent at delivering design solutions
          that are user-centric and solve user needs. I am also a competent
          Front-end developer which gives me the autonomy to make sure the
          design intent is reflected in the final product. See how to{" "}
          <Link href="/contact">
            <a className="fw-bold " style={{ color: "#c81e2a" }}>
              contact me here
            </a>
          </Link>{" "}
          .
        </p>
      </div>
    </div>
  );
}
