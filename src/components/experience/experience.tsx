"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/experience.json";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [frame, setFrame] = useState(0);

  const totalFrames = data.op - data.ip;

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update Lottie frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentFrame = Math.floor(latest * totalFrames);
    lottieRef.current?.goToAndStop(currentFrame, true);
    setFrame(currentFrame);
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-orange-500 p-10">
      <div className="sticky top-0 h-screen bg-white rounded-2xl flex flex-col items-center justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          autoplay={false}
          loop={false}
        />

        <div className="mt-8 text-xl font-semibold">
          {frame <= 214 && "Introduction section"}
          {frame > 214 && frame <= 408 && "Middle section"}
          {frame > 408 && "Final section"}
        </div>
      </div>
    </div>
  );
};
