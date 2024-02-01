//import  component to be displayed on all pages
import Footer from "./Footer";
import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function Layout({ children }) {
  const [mousePosition, setMousePosition] = React.useState({
    xPos: 0,
    yPos: 0,
  });
  const [show, setShow] = React.useState(false);
  const variants = {
    default: {
      x: mousePosition.xPos,
      y: mousePosition.yPos,
    },
  };
  /* all page components will be kept inside .container div element */
  const handleMouseMove = (event) => {
    setMousePosition({ xPos: event.clientX, yPos: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    setShow(!show);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // setShow(!show);
    };
  }, []);

  //   <motion.div
  //   initial={{ opacity: 0, scale: 0.5 }}
  //   animate={{ opacity: 1, scale: 1 }}
  //   transition={{ duration: 0.5 }}
  // />
  return (
    <div className="container-fluid  px-0">
      {/* <Head>
        <link rel="shortcut icon" href="/favme.ico" />
      </Head> */}

      <motion.div
        className="motionDiv"
        variants={{
          default: {
            x: mousePosition.xPos,
            y: mousePosition.yPos,
          },
        }}
        animate="default"
        transition={{ duration: 0, delay: 0 }}
        style={{
          padding: "1rem",
          height: "30px",
          width: "30px",
          borderRadius: "30px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 8000,
          mixBlendMode: "multiply",
        }}
      >
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "5px",
          }}
        />
      </motion.div>

      <>{children}</>
      <Footer />
    </div>
  );
}
