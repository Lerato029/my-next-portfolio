import React from "react";
import Image from "next/image";
export default function Blogs({ blogs }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 pt-2 ">
      {blogs.map((blog) => (
        <div key={blog.bg} className="col mx-0 gx-0 prime">
          <div
            className="card  text-white "
            style={{
              background: `${blog.bg}`,
              height: "21rem",
              borderRadius: "0",
            }}
          >
            <Image
              layout="fill"
              src={blog.img}
              className="card-img"
              alt={blog.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />

            <div className="card-img-overlay">
              <a href={`${blog.url}`} target="_blank" rel="noreferrer">
                <h5
                  className="card-title  text-start"
                  style={{ cursor: "pointer" }}
                >
                  {blog.name}
                </h5>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
