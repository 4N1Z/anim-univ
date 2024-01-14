"use client";
import { univ } from "./utils/export";
import Cards from "./components/Cards";
import { motion, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  // console.log(scrollYProgress)

  // useEffect(()=>{
  //   scrollYProgress.on("change", e => console.log(scrollYProgress.current))
  // },[])

  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


  },[])


  return (
    <main className="relative mt-[25vh]">
      <h1 className="font-medium text-center uppercase text-4xl">
        Universities
      </h1>

      {/* <div className=""> */}
      {univ.map((univs, index) => {
        const targetScale = 1 - (univ.length - index) * 0.05;
        return (
          <Cards
            i={index}
            {...univs}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      {/* </div> */}
    </main>
  );
}
