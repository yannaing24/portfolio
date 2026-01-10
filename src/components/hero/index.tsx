import { Avatar } from "./avatar";
import { Headline } from "./headline";
import { Navigation } from "./navigation";
import { Subtitle } from "./subtitle";

export const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/svg/hero-bg.svg')] bg-cover bg-center">
      <div className="h-screen container m-auto flex flex-col">
        <Navigation />
        <Headline />
        <Avatar />
        <Subtitle />
      </div>
    </div>
  );
};
