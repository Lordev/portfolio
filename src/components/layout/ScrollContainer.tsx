import { MotionValue, useScroll } from 'framer-motion';
import { ReactNode, RefObject } from 'react';

interface ScrollContainerProps  {
  className?: string;
  children: ((scrollYProgress: MotionValue<number>) => ReactNode) | ReactNode;
  offset?: [string, string];
  containerRef?: RefObject<HTMLDivElement | null>; }

export default function ScrollContainer({
  children,
  offset = ['start end', 'end start'],
  containerRef,
  className,
}: ScrollContainerProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  });

  return (
    <div ref={containerRef} className={className}>
      {typeof children === 'function' ? children(scrollYProgress) : children}
    </div>
  );
}