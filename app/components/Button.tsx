import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({ isActive, setIsActive }: ButtonProps) {
  return (
    <div
      className="button h-[40px] w-[100px] rounded-[25px] absolute top-0 right-0 uppercase overflow-hidden cursor-pointer"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <motion.div
        className="slider relative w-[100%] h-[100%] "
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="h-[100%] w-[100%]  bg-[#9700FF] text-white ">
          <PerspectiveText label="menu" />
          <p>menu</p>
        </div>

        <div className="h-[100%] w-[100%] absolute top-[100%]  bg-red-400 text-black">
          <PerspectiveText label="close" />
          <p>close</p>
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: any) {
    return (
      <div className="w-full h-full flex items-center justify-center perspectiveText">
        <p className="transition-all transform-style-preserve-3d uppercase">
          {label}
        </p>
        <p className="absolute transition-all transform transform-origin-bottom-center rotate-x-[-90deg] translate-y-9 opacity-0">
          {label}
        </p>
      </div>
    );
  }