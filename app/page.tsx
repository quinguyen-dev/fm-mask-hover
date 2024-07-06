"use client";

import { motion } from "framer-motion";
import useMousePosition from "src/hooks/useMousePosition";

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <main className="flex min-h-screen flex-col min-w-screen items-center justify-center overflow-hidden cursor-none">
      <motion.div
        id="mask"
        className="w-screen h-screen justify-center flex items-center absolute bg-white"
        animate={{
          WebkitMaskPosition: `${x - 64}px ${y - 64}px`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <h1 className="text-4xl md:w-[766px] w-[512px] font-bold text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          quae blanditiis hic laborum reprehenderit eligendi nihil
        </h1>
      </motion.div>
      <div className="w-screen h-screen justify-center flex items-center">
        <h1 className="text-4xl md:w-[766px] w-[512px] font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          quae blanditiis hic laborum reprehenderit eligendi nihil
        </h1>
      </div>
    </main>
  );
}
