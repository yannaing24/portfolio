import { useRef, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import data from "@/assets/lottie/skill-3.json";

export const Skill3 = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      lottieRef.current?.play();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-3/4 lg:w-3/5">
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={false}
        autoplay={false}
      />
    </div>
  );
};
