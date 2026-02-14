import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import AboutIntroSvg from "@/assets/svg/about-intro.svg?react";
import { Skill1 } from "./skill-1";
import { Skill2 } from "./skill-2";
import { Skill3 } from "./skill-3";
import { Skill4 } from "./skill-4";

export const Skill = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 6]);

  return (
    <div>
      <div className="flex flex-col gap-64 mb-64 p-24">
        <Skill1 />
        <Skill2 />
        <Skill3 />
      </div>
      <div className="h-[150vh] relative" ref={container}>
        <div className="h-screen sticky top-0">
          <div className="px-24">
            <Skill4 />
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.div
              style={{ scale }}
              className="absolute bottom-[-10%] z-0 origin-bottom"
            >
              <AboutIntroSvg />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
