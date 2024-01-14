import Image from "next/image";
import React from "react";

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
        className={`flex max-w-[960px] max-h-[370px] justify-between gap-[3em] bg-[#f8eefe] p-2 rounded`}
      >
        <Image
          src={image}
          width={350}
          height={350}
          alt=""
          className="object-contain rounded"
        />
        <div className="content flex flex-col text-ellipsis">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-gray-500 overflow-hidden h-[50%] py-2">{desc}</p>
          <p>Courses : {courses}</p>
          <p>Fee : {fee}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
