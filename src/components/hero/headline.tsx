import Lottie from "lottie-react";
import data from "@/assets/headline.json";

export const Headline = () => {
  return (
    <div>
      <h2>UI/UX Designer</h2>
      <div className="w-3/4 lg:w-1/3">
        <Lottie animationData={data} loop={false} />
      </div>
    </div>
  );
};
