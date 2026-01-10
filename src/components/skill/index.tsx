import { Skill1 } from "./skill-1";
import { Skill2 } from "./skill-2";
import { Skill3 } from "./skill-3";
import { Skill4 } from "./skill-4";

export const Skill = () => {
  return (
    <div className="bg-white text-black py-8">
      <div className="container m-auto bg-[#fff2eb] rounded-2xl p-24">
        <div className="flex flex-col gap-64">
          <Skill1 />
          <Skill2 />
          <Skill3 />
          <Skill4 />
        </div>
      </div>
    </div>
  );
};
