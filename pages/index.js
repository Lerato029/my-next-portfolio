//Used for custom titles
import Link from "next/link";

export default function Home() {
  return (
    <div className="container my-5">
      <head>
        <title>Home</title>
      </head>

      <div className="profilePic ">
        <img src="/profilePic.png" alt="Picture of the author" />
      </div>

      <p className="text-dark my-2 fs-6 fw-bolder text-md-start text-start">
        Hi, my name is Lerato Mokgwabona. I'm an entry level Front-End Web
        Developer and I enjoy solving problems, coding, design and art. I come
        from an Architectural background however, have been fascinated by the
        tech industry, the virtual platforms created to improve the way we live
        in reality. I love the freedom to create anything I can think of. So I
        took the opportunity to learn the skills to become a participant in the
        industry. I look forward to working along side UX and UI designers to
        create platforms that provide the best experience for the users and be a
        part of the community of developers who create platforms that connect
        people. See how to contact me{" "}
        <Link href="/contact">
          <strong className="text-primary" style={{ cursor: "pointer" }}>
            here
          </strong>
        </Link>
        .
      </p>

      <style jsx>
        {`
          .profilePic {
            margin-top: 30px;
            border-radius: 50%;
            height: 300px;
            width: 300px;
            background-color: black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          div {
            width: 70%;
          }
          img {
            height: 210px;
            width: 210px;
            object-fit: cover;
          }
          @media only screen and (max-width: 768px) {
            /* For mobile phones: */
            .profilePic {
              margin-top: 30px;
              border-radius: 50%;
              height: 100px;
              width: 100px;
              background-color: black;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            img {
              height: 70px;
              width: 70px;
              object-fit: cover;
            }
          }
        `}
      </style>
    </div>
  );
}
