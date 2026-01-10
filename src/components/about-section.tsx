import { useEffect, useRef, useState } from "react";
import AboutIntro from "@/assets/svg/about-intro.svg?react";
import { About1 } from "@/components/about-1";

export const AboutIntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          // reveal About1 AFTER svg animation
          setTimeout(() => {
            setShowContent(true);
          }, 900); // match animation duration
        }
      },
      {
        threshold: 0.3, // 👈 trigger when 30% visible
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      {/* SVG */}
      <div
        className={`
          flex justify-center
          transition-transform duration-900 ease-out
          ${visible ? "scale-100" : "scale-0"}
        `}
      >
        <AboutIntro className="w-[60vw] max-w-4xl" />
      </div>

      {/* About content */}
      <div
        className={`
          transition-all duration-700 delay-200
          ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }
        `}
      >
        {showContent && <About1 />}
      </div>
    </section>
  );
};
