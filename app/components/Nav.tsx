import React from "react";
import { FooterLinks, navLinks } from "./navLinks";
import { motion } from "framer-motion";
const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: any) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

function Nav() {
  return (
    <div className="nav h-[100%] pt-[100px] pb-[50px] px-[40px] box-border flex flex-col justify-between">
      <div className="navBody text-white text-[42px] flex flex-col gap-1 ">
        {navLinks.map((link, i) => {
          return (
            <div key={i} className="linkContainer ">
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a href={link.href}>{link.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="navFooter flex flex-wrap">
        {FooterLinks.map((link, i) => {
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-[50%] text-white "
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
