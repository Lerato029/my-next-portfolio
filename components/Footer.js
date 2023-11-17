import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="mt-5">
      <a href="#top" className="mb-5 text-center">
        <h1>
          <i className="fas fa-chevron-up "></i>
        </h1>
      </a>
      <ul className="socialMedia fw-bold mt-5">
        <a href="https://github.com/Lerato029" target="_blank" rel="noreferrer">
          <li title="Github">
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/lerato-m/"
          target="_blank"
          rel="noreferrer"
        >
          <li title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </a>
        <a
          href="https://www.instagram.com/lerato_ny"
          target="_blank"
          rel="noreferrer"
        >
          <li title="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </a>
        <a
          href="https://dribbble.com/UI_ByLerato"
          target="_blank"
          rel="noreferrer"
        >
          <li title="Dribble">
            <FontAwesomeIcon icon={faDribbble} />
          </li>
        </a>
      </ul>
    </div>
  );
}
