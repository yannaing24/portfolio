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
            {frame <= 214 && (
              <p>
                FIRST Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto possimus dolore vero aut illo, eveniet quisquam rerum
              </p>
            )}
            {frame > 214 && frame <= 408 && (
              <p>
                SECOND Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto possimus dolore vero aut illo, eveniet quisquam rerum
              </p>
            )}
            {frame > 408 && frame <= 599 && (
              <p>
                THIRD Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto possimus dolore vero aut illo, eveniet quisquam rerum
              </p>
            )}
            {frame > 599 && (
              <p>
                FOURTH Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto possimus dolore vero aut illo, eveniet quisquam rerum
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
