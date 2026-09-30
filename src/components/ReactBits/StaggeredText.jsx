import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StaggeredText({
  text,
  className = "",
  staggerDelay = 0.05,
  once = true,
  animateBy = "word", // 'word' or 'character'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const elements = animateBy === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {elements.map((element, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {element}
          {animateBy === "word" && index < elements.length - 1 && "\u00A0"}
          {animateBy === "character" && element === " " && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
}
