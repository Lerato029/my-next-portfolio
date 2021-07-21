
//import  component to be displayed on all pages
import Footer from "./Footer";

export default function Layout({ children }) {
  /* all page components will be kept inside .container div element */
  return (
    <div className="container-fluid  px-0">
      <>{children}</>
      <Footer />
    </div>
  );
}
