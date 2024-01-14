import Image from "next/image";
import React from "react";
import { motion, useScroll } from "framer-motion";

interface UnivCards {
  key: number;
  title: string;
  desc: string;
  courses: string;
  fee: string;
  image: string;
  color: string;
}

const Cards: React.FC<UnivCards> = ({
  title,
  desc,
  courses,
  fee,
  image,
  color,
}) => {
  return (
    <div className="cardContainer h-[100vh] flex items-center justify-center sticky top-[0px]">
      <div
        className={`flex max-w-[960px] min-h-[370px] justify-between gap-[2em] bg-[#f8eefe] p-2 rounded`}
      >
        <div className="ImageContainer relative w-[100%] h-[100] rounded overflow-hidden">
          <div className="innerImage overflow-clip w-full">
            <Image
              src={image}
            //   width={350}
            //   height={350}
            fill = {true}
              alt=""
              className="object-cover "
            />
          </div>
        </div>

        <div className="content flex flex-col text-ellipsis">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-gray-500 overflow-hidden py-2">{desc}</p>
          <p>Courses : {courses}</p>
          <p>Fee : {fee}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
