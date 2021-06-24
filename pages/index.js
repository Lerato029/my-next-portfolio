//Used for custom titles
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <head>
        <title>Home</title>
        
      </head>
      <div className="profilePic">
        <Image
          src="/profilePic.png"
          alt="Picture of the author"
          width={210}
          height={210}
          thumbnail
        />
      </div>
      <h3>
        Hi, my name is Lerato Mokgwabona. I'm an entry level Front-End Web
        Developer and I enjoy solving problems, coding, design and art. I come
        from an Architectural background however, have been fascinated by the
        tech industry, the virtual platforms created to improve the way we live
        in reality. I love the freedom to create anything I can think of. So I
        took the opportunity to learn the skills to become a participant in the
        industry. I look forward to working along side UX and UI designers to
        create platforms that provide the best experience for the users and be a
        part of the community of developers who create platforms that connect
        people.
      </h3>
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
        `}
      </style>
    </div>
  );
}
