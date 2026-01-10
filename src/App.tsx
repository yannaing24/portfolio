import { ReactLenis } from "lenis/react";
import { Hero } from "@/components/hero";
import { Skill } from "@/components/skill";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      }}
    >
      <div className="container m-auto">
        <Hero />
        <Skill />
      </div>
    </ReactLenis>
  );
}
