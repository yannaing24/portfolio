import { ReactLenis } from "lenis/react";
import { Hero } from "@/components/hero";
import { Skill } from "@/components/skill";
import { About1 } from "./components/about-1";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      }}
    >
      <Hero />
      <Skill />
      <About1 />
    </ReactLenis>
  );
}
