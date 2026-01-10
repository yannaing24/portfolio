import { Avatar } from "./avatar";
import { Headline } from "./headline";
import { Navigation } from "./navigation";
import { Subtitle } from "./subtitle";

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <Headline />
      <Avatar />
      <Subtitle />
    </div>
  );
};
