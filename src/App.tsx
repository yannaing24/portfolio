import { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { frame, cancelFrame } from "motion";
import { Hero } from "@/components/hero";
import { Skill } from "@/components/skill";
import { About1 } from "./components/about-1";

export default function App() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      }}
      ref={lenisRef}
    >
      <Hero />
      <Skill />
      <About1 />
    </ReactLenis>
  );
}
