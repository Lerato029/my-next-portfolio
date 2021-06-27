/* import layout styles to style div element */
import styles from "../styles/Layout.module.css";

//import header component to be displayed on all pages
import Header from "./Header";

export default function Layout({ children }) {
  /* all page components will be kept inside .container div element */
  return (
    <>
      <Header />
      <div className='container'>
          {children}
      </div>
    </>
  );
}
