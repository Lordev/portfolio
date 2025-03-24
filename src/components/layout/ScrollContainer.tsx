'use client';
import { ReactNode } from "react";
import { useScroll, MotionValue } from "framer-motion";

interface ScrollContainerProps {
  children: ((scrollYProgress: MotionValue<number>) => ReactNode) | ReactNode;
  className?: string;
  offset?: [string, string]; 
  containerRef?: React.RefObject<HTMLDivElement>;
}

export default function ScrollContainer({ 
  children, 
  className = "", 
  offset=['start start', 'end start'],
  containerRef
}: ScrollContainerProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });


  return (
    <div ref={containerRef} className={className}>
      {typeof children === "function" ? children(scrollYProgress) : children}
    </div>
  );
}