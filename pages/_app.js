/* globals css style determining font and removing default styles*/
import "../styles/globals.css";

/* import layout style for uniformity across all pages */
import Layout from "../components/Layout";

import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/g-analytics";
//parent component that is also wrapped in the Layout component
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//export so it can be imported
export default MyApp;
