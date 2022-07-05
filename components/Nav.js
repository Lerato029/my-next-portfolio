//import link to allow navigation to other pages
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();
    const isActive = (r) => {
        if (router.pathname === r) {
            return 'nav-link active';
        } else {
            return 'nav-link';
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        Lerato Mokgwabona
                    </a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item ">
                            <Link href="/">
                                <a className={isActive('/')}>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={isActive('/about')}>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className={isActive('/contact')}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text fw-bold">
                        "...virtual platforms created to improve the way we live
                        in reality."
                    </span>
                </div>
            </div>
        </nav>
    );
}
