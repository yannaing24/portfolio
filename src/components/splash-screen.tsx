import Lottie from "lottie-react";
import data from "@/assets/lottie/Loading.json";

export const SplashScreen = () => {
  return (
    <div className="bg-white  text-black">
      <div className="h-screen container m-auto flex flex-col">
        <div className="flex-1" />
        <div className="flex justify-between align-center py-8">
          <div className="w-1/3">
            <Lottie animationData={data} loop={false} />
          </div>
          <div className="flex flex-col ">
            <div className="flex-1" />
            <div className="text-right">
              <p>
                Your friendly neighbourhood <br />
                designer is warming up...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
