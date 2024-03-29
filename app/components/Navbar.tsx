"use client";
import React, { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed right-[50px] top-[50px]">
      <motion.div
        className="relative max-w-[480px] h-fit bg-[#9700FF] rounded-[26px]"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
            {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>

      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Navbar;
