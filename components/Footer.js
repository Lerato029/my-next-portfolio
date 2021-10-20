export default function Footer() {
  return (
    <div className="mt-5">
      <a href="#top" className="mb-5 text-center">
        <h1>
          <i className="fas fa-chevron-up "></i>
        </h1>
      </a>
      <ul className="socialMedia fw-bold mt-5">
        <li title="Github">
          <div>
            <a href="https://github.com/Lerato029" target="_blank">
              <i className="fab fa-github "></i>
              <br />
            </a>
          </div>
        </li>

        <li title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/lerato-mokgwabona-97107a16b/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li title="Instagram">
          <a href="https://www.instagram.com/leratolatech/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li title="Dribble">
          <a href="https://dribbble.com/UI_ByLerato" target="_blank">
            <i className="fas fa-basketball-ball"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
