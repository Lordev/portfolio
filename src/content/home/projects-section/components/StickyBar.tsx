import { motion, MotionStyle } from 'framer-motion';

interface StickyBarProps {
  motionStyle: MotionStyle;
}

export default function StickyBar({ motionStyle }: StickyBarProps) {


  return (
    <motion.div
      className={`sticky top-0 -mb-100 z-20 w-full bg-background h-100 
        lg:hidden`}
      style={motionStyle}
    />
  );
}
