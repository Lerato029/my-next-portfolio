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
            <i className="fab fa-github "></i>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/lerato-mokgwabona-97107a16b/"
          target="_blank"
          rel="noreferrer"
        >
          <li title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com/leratolatech/"
          target="_blank"
          rel="noreferrer"
        >
          <li title="Instagram">
            <i className="fab fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://dribbble.com/UI_ByLerato"
          target="_blank"
          rel="noreferrer"
        >
          <li title="Dribble">
            <i className="fas fa-basketball-ball"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}
