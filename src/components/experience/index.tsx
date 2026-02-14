"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ExperienceTopSvg from "@/assets/svg/experience-top.svg?react";
import { Main } from "./main";

export const Experience = () => {
  const containerRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Move from +300px (right) to -300px (left)
  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div style={{ x }} className="sticky top-0">
        <ExperienceTopSvg />
      </motion.div>
      <Main />
    </div>
  );
};
