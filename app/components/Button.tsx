import React from "react";

function Button() {
  return (
    <div className="h-[40px] w-[100px] rounded-[25px] relative uppercase">
      <div className="h-[100%] w-[100%] flex items-center justify-center bg-[#9700FF] text-white ">
        <p>menu</p>
      </div>

      <div className="h-[100%] w-[100%] absolute top-[100%] flex items-center justify-center overflow-hidden bg-red-400 text-black">
        <p>close</p>
      </div>
    </div>
  );
}

export default Button;
