"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface UnivCards {
  i: number;
  title: string;
  desc: string;
  courses: string;
  fee: string;
  image: string;
  color: string;
}

const Cards: React.FC<UnivCards> = ({
  i,
  title,
  desc,
  courses,
  fee,
  image,
  color,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // console.log(i)
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, i * 50]);

  return (
    <div
      ref={container}
      className="cardContainer h-[100vh] flex items-center justify-center sticky top-[0px]"
    >
      <motion.div
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 100}px)`,
          translateY: translateY,
        }}
        className="flex max-w-[960px] min-h-[370px] justify-between gap-[2em] bg-[#f8eefe] p-2 rounded border-[2px] border-solid border-black top-[-25%]"
      >
        <div className="ImageContainer relative w-[100%] h-[100] rounded overflow-hidden">
          <motion.div
            style={{ opacity: scrollYProgress }}
            className="innerImage overflow-clip w-full "
          >
            <Image
              src={image}
              //   width={350}
              //   height={350}
              fill={true}
              alt=""
              className="object-cover "
            />
          </motion.div>
        </div>

        <div className="content flex flex-col text-ellipsis">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-gray-500 overflow-hidden py-2">{desc}</p>
          <p>Courses : {courses}</p>
          <p>Fee : {fee}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
