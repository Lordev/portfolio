'use client';
import { useScroll, MotionValue } from "framer-motion";

interface ScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: ((scrollYProgress: MotionValue<number>) => ReactNode) | ReactNode;
  offset?: [string, string]; 
  containerRef?: React.RefObject<HTMLDivElement>;
}

export default function ScrollContainer({ 
  children, 
  offset=['start start', 'end start'],
  containerRef,
  ...props
}: ScrollContainerProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });
  return (
    <div ref={containerRef} {...props}>
      {typeof children === "function" ? children(scrollYProgress) : children}
    </div>
  );
}