
//import  component to be displayed on all pages
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  /* all page components will be kept inside .container div element */
  return (
    <div className="container-fluid  px-0">
      {/* <Head>
        <link rel="shortcut icon" href="/favme.ico" />
      </Head> */}
      <>{children}</>
      <Footer />
    </div>
  );
}
