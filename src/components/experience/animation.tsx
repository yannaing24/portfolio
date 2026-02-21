"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/experience.json";
import { Header } from "./header";

export const Animation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [frame, setFrame] = useState(0);

  const totalFrames = data.op - data.ip;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentFrame = Math.floor(latest * totalFrames);
    lottieRef.current?.goToAndStop(currentFrame, true);
    setFrame(currentFrame);
  });

  return (
    <div ref={containerRef} className="relative h-[1500vh] bg-orange-500 p-10">
      <div className="sticky top-10 h-[90vh] bg-white rounded-2xl overflow-x-hidden">
        <div className="flex flex-col justify-between h-full">
          <Header />
          <Lottie
            lottieRef={lottieRef}
            animationData={data}
            autoplay={false}
            loop={false}
            className="w-[200%] md:w-full"
          />

          <div className="text-xl font-semibold p-12">
            {frame <= 214 && "Introduction section"}
            {frame > 214 && frame <= 408 && "Middle section"}
            {frame > 408 && "Final section"}
          </div>
        </div>
      </div>
    </div>
  );
};
