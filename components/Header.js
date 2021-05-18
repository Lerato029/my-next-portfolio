//import styles for the header
import headerStyle from "../styles/Header.module.css";

//Nav component imported here
import Nav from "./Nav";

export default function Header() {
  const x = 5;
  return (
    <div className="background">
      <h1 className={headerStyle.title}>Developer Portfolio</h1>
      <p className={headerStyle.description}>By Lerato Mokgwabona</p>
      <p className="p">5</p>
      <ul class={headerStyle.socialMedia}>
        <li>
          <a href="https://github.com/Lerato029" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lerato-mokgwabona-97107a16b/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/uibylerato/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
      <Nav />
      
    </div>
  );
}
