import Lottie from "lottie-react";
import data from "@/assets/lottie/Loading.json";

interface Props {
  visible: boolean;
}

export const SplashScreen = (props: Props) => {
  const { visible } = props;
  return (
    <div
      className={`bg-white text-black
      fixed inset-0 z-50
      transition-all duration-700 ease-in-out
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-full"}
    `}
    >
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
