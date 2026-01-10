import { useRef, useEffect, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/about-1.json";

export const About1 = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          lottieRef.current?.play();
          setHasPlayed(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col justify-center bg-blue-500"
    >
      <div className="w-3/4 lg:w-2/5 m-auto">
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          loop={false}
          autoplay={false}
        />
      </div>
    </div>
  );
};
