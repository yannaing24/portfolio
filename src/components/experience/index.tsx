"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ExperienceTopSvg from "@/assets/svg/experience-top.svg?react";
import { Animation } from "./animation";

export const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  return (
    <div>
      <div ref={containerRef} className="relative overflow-hidden">
        <motion.div style={{ x }} className="sticky top-0">
          <ExperienceTopSvg />
        </motion.div>
      </div>
      <Animation />
    </div>
  );
};
