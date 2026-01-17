import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import AboutIntroSvg from "@/assets/svg/about-intro.svg?react";
import { Skill1 } from "./skill-1";
import { Skill2 } from "./skill-2";
import { Skill3 } from "./skill-3";
import { Skill4 } from "./skill-4";

export const Skill = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const scale = useTransform(scrollYProgress, [0.72, 1], [0, 6]);
  
  return (
   <div className="bg-white text-black relative" ref={container}>
     <div className="pt-8">
      <div className="container m-auto bg-[#fff2eb] rounded-2xl p-24 pb-260 bg-[url('/src/assets/svg/skill-bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col gap-64">
          <Skill1 />
          <Skill2 />
          <Skill3 />
          <Skill4 />
        </div>
      </div>
    </div>
    <motion.div className="absolute bottom-0 left-0 right-0 flex justify-center" style={{
      scale,
      transformOrigin: "50% 100%", 

    }}>
      <AboutIntroSvg style={{
        height: 'auto'
      }}/>
    </motion.div>
   </div>
  );
};
