/* globals css style determining font and removing default styles*/
import "../styles/globals.css";

/* import layout style for uniformity across all pages */
import Layout from "../components/Layout";

//parent component that is also wrapped in the Layout component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//export so it can be imported
export default MyApp;
