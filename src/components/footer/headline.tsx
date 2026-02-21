import { useRef, useEffect, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/footer.json";

export const Headline = () => {
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
        threshold: 1,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={false}
        autoplay={false}
      />
    </div>
  );
};
