/* import nav styling module */
import navStyle from '../styles/Nav.module.css'

//import link to allow navigation to other pages
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={navStyle.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact Me</Link>
                </li>
            </ul>
            
        </nav>
    )
}
