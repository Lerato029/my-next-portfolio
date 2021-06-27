//import link to allow navigation to other pages
import Link from "next/link";
{
  /* <nav className={navStyle.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
  
              
            </ul>
            
        </nav> */
}
export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link href="/">
          <a class="navbar-brand" href="#">
            Lerato Mokgwabona
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/projects">
                <a class="nav-link">Projects</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <span class="navbar-text">
            "...virtual platforms created to improve the way we live in
            reality."
          </span>
        </div>
      </div>
    </nav>
  );
}
