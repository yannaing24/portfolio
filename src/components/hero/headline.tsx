import { useRef, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/headline.json";

export const Headline = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      lottieRef.current?.play();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>UI/UX Designer</h2>
      <div className="w-3/4 lg:w-1/3">
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
