"use client";
import { useRef } from "react";
import ScrollContainer from "@/components/layout/ScrollContainer";
import AnimatedContent from "./AnimatedContent";
import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContainer containerRef={containerRef} className="h-1080 relative px-[var(--p-fluid-md)] overflow-hidden">
      {(scrollYProgress) => (
        <>
          <HeroImage />
          <AnimatedContent scrollYProgress={scrollYProgress} />
          <HeroCTA />
        </>
      )}
    </ScrollContainer>
  );
}
