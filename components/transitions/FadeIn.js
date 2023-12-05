import React from "react";
import { motion } from "framer-motion";
export default function FadeIn({ children, idValue = "", delayValue = 0 }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      id={idValue}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
        delay: delayValue,
      }}
    >
      {children}
    </motion.div>
  );
}
