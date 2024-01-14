import React from "react";
import { navLinks } from "./navLinks";
import {motion} from "framer-motion"

function Nav() {
  return (
    <div className="nav h-[100%] pt-[100px] pb-[50px] py-[40px] box-border ">
      <div className="navBody text-white text-[46px] flex flex-col gap-2">
        {navLinks.map((link, i) => {
          return (
            <div key={i}>
              <a href={link.href}>{link.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
